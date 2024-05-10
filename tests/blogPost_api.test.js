const {
  test,
  after,
  beforeEach,
  describe,
} = require("node:test");
const assert = require("node:assert");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const logger = require("../utils/logger");

const BlogEntry = require("../models/blogEntry");
const helper = require("./test_helper");

const api = supertest(app);

//---------------------------------------------------------
//DB Initialization before testing
beforeEach(async () => {
  await BlogEntry.deleteMany({});
  console.log("cleared");

  const blogEntryObjects = helper.initialBlogEntries.map(
    (be) => new BlogEntry(be),
  );
  const promiseArray = blogEntryObjects.map((note) =>
    note.save(),
  );
  await Promise.all(promiseArray);
});

//---------------------------------------------------------
//Test Suite
test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all blogs are returned", async () => {
  const response = await api.get("/api/blogs");

  assert.strictEqual(
    response.body.length,
    helper.initialBlogEntries.length,
  );
});

test("a specific blogPost is within the returned blogPost", async () => {
  const response = await api.get("/api/blogs");

  const contents = response.body.map((e) => e.title);
  // is the argument truthy
  assert(contents.includes("Title-02"));
});

test("a valid blogPost can be added ", async () => {
  const newBlogPost = {
    title: "Title-yyy",
    author: "Author-yyy",
    url: "URL-yyy",
    likes: 220,
  };

  await api
    .post("/api/blogs")
    .send(newBlogPost)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const blogPostAtEnd = await helper.BlogEntriesInDb();
  const contents = blogPostAtEnd.map((n) => n.title);

  assert.strictEqual(
    blogPostAtEnd.length,
    helper.initialBlogEntries.length + 1,
  );

  assert(contents.includes("Title-yyy"));
});

test("blogPost without author is not added", async () => {
  const newBlogPost = {
    title: "Title-zzz",
    url: "URL-zzz",
    likes: 4,
  };

  await api
    .post("/api/blogs")
    .send(newBlogPost)
    .expect(400);

  const blogPostAtEnd = await helper.BlogEntriesInDb();

  assert.strictEqual(
    blogPostAtEnd.length,
    helper.initialBlogEntries.length,
  );
});

//---------------------------------------------------------
//tests for fetching and removing an individual blogPost:
test("a specific blogPost can be viewed", async () => {
  const blogPostAtStart = await helper.BlogEntriesInDb();
  const blogPostToView = blogPostAtStart[0];

  const resultNote = await api
    .get(`/api/blogs/${blogPostToView.id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  assert.deepStrictEqual(resultNote.body, blogPostToView);
});

//---------------------------------------------------------
//Special Test 01:

test("test blogPost id, not _id", async () => {
  const blogPostAtStart = await helper.BlogEntriesInDb();
  const blogPostToTest = blogPostAtStart[0];

  assert.strictEqual(!!blogPostToTest.id, true);
});

test("test blogPost like default to 0", async () => {
  const newBlogPost = {
    title: "Title-zzz",
    author: "Author-zzz",
    url: "URL-zzz",
  };

  const aux = await api
    .post("/api/blogs")
    .send(newBlogPost)
    .expect(201);

  assert.strictEqual(aux.body.likes, 0);
});

test("blogPost without url is not added", async () => {
  const newBlogPost = {
    title: "Title-zzz",
    author: "Author-zzz",
    likes: 4,
  };

  await api
    .post("/api/blogs")
    .send(newBlogPost)
    .expect(400);

  const blogPostAtEnd = await helper.BlogEntriesInDb();

  assert.strictEqual(
    blogPostAtEnd.length,
    helper.initialBlogEntries.length,
  );
});

test("blogPost without title is not added", async () => {
  const newBlogPost = {
    author: "Author-zzz",
    url: "URL-zzz",
    likes: 4,
  };

  await api
    .post("/api/blogs")
    .send(newBlogPost)
    .expect(400);

  const blogPostAtEnd = await helper.BlogEntriesInDb();

  assert.strictEqual(
    blogPostAtEnd.length,
    helper.initialBlogEntries.length,
  );
});

describe("test part b, last requirements", () => {
  test("a blogPost can be deleted", async () => {
    const blogPostAtStart = await helper.BlogEntriesInDb();
    const blogPostToDelete = blogPostAtStart[0];

    await api
      .delete(`/api/blogs/${blogPostToDelete.id}`)
      .expect(204);

    const blogPostAtEnd = await helper.BlogEntriesInDb();

    const titles = blogPostAtEnd.map((r) => r.title);
    assert(!titles.includes(blogPostToDelete.title));

    assert.strictEqual(
      blogPostAtEnd.length,
      helper.initialBlogEntries.length - 1,
    );
  });

  test("Modify a blogPost", async () => {
    const blogPostAtStart = await helper.BlogEntriesInDb();
    const blogPostToModify = blogPostAtStart[0];
    const ModifiyingData = {
      title: "casacasa",
      author: "AAAAAAAAAAA",
      url: "Not so random url",
      likes: 30,
    };

    await api
      .put(`/api/blogs/${blogPostToModify.id}`)
      .send(ModifiyingData)
      .expect(200);

    const blogPostAtEnd = await helper.BlogEntriesInDb();
    const blogPostModified = blogPostAtEnd[0];
    ModifiyingData.id = blogPostToModify.id;

    assert.deepStrictEqual(
      blogPostModified,
      ModifiyingData,
    );
  });
});

//---------------------------------------------------------
//After testing
after(async () => {
  await mongoose.connection.close();
});
