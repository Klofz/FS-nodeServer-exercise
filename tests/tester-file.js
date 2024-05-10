const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");
const testData = require("./test-data");

describe("test suite for -dummy first func", () => {
  test("dummy returns one", () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    assert.strictEqual(result, 1);
  });
});

describe("test suite for -total likes func", () => {
  test("of empty array is zero", () => {
    assert.strictEqual(listHelper.totalLikes([]), 0);
  });

  test("when list has only one blog w/o likes", () => {
    assert.strictEqual(
      listHelper.totalLikes(testData.singleBlogArr_woLikes),
      0,
    );
  });

  test("when list has only one blog w/ likes", () => {
    assert.strictEqual(
      listHelper.totalLikes(testData.singleBlogArr_wLikes),
      15,
    );
  });

  test("of mixed blog with w/o likes field", () => {
    const blogArr = testData.mixedBlogArr;

    const result = listHelper.totalLikes(blogArr);
    assert.strictEqual(result, 70);
  });
});

describe("test suite for -find most liked blog", () => {
  const topBlog_NotFound = {
    title: "Doesn't have a title",
    author: "Doesn't have a author",
    likes: "Theres no blog here son",
  };

  const topBlog_found_W_oneInArray = {
    title: "title1",
    author: "author1",
    likes: 15,
  };

  test("of empty array is zero", () => {
    assert.deepEqual(
      listHelper.favoriteBlog([]),
      topBlog_NotFound,
    );
  });

  test("when list has only one blog w/o likes", () => {
    assert.deepEqual(
      listHelper.favoriteBlog(
        testData.singleBlogArr_woLikes,
      ),
      topBlog_NotFound,
    );
  });

  test("when list has only one blog w/ likes", () => {
    assert.deepEqual(
      listHelper.favoriteBlog(
        testData.singleBlogArr_wLikes,
      ),
      topBlog_found_W_oneInArray,
    );
  });

  test("of mixed blog with w/o likes field", () => {
    const blogArr = testData.mixedBlogArr;

    const result = listHelper.favoriteBlog(blogArr);
    assert.deepEqual(result, topBlog_found_W_oneInArray);
  });
});

describe("test suite for -find author with more blogs", () => {
  const topAuthor_blogAmout = {
    author: "author2",
    blogs: 3,
  };

  test("of mixed blog with_w/o likes field", () => {
    const blogArr = testData.mixedBlogArr;

    const result = listHelper.mostBlogs(blogArr);
    assert.deepEqual(result, topAuthor_blogAmout);
  });
});

describe("test suite for -mostLikes, find author with mostlikedPost and add all his likes together", () => {
  const topAuthor_blogAmout = {
    author: "author1",
    total_likes: 28,
  };

  test("of mixed blog with_w/o likes field", () => {
    const blogArr = testData.mixedBlogArr;

    const result = listHelper.mostLikes(blogArr);
    assert.deepEqual(result, topAuthor_blogAmout);
  });
});
