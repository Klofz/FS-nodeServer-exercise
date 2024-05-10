const BlogEntry = require("../models/blogEntry");

const initialBlogEntries = [
  {
    title: "Title-01",
    author: "Author-01",
    url: "URL-01",
    likes: 10,
  },
  {
    title: "Title-02",
    author: "Author-02",
    url: "URL-02",
    likes: 14,
  },
  {
    title: "Title-03",
    author: "Author-03",
    url: "URL-03",
    likes: 22,
  },
];

const nonExistingId = async () => {
  const blogEntry = new BlogEntry({
    title: "Title-xxx",
    author: "Author-xxx",
    url: "URL-xxx",
    likes: 1000,
  });
  await blogEntry.save();
  await blogEntry.deleteOne();

  return blogEntry.id.toString();
};

const BlogEntriesInDb = async () => {
  const blogEntries = await BlogEntry.find({});
  return blogEntries.map((blogEntry) => blogEntry.toJSON());
};

module.exports = {
  initialBlogEntries,
  nonExistingId,
  BlogEntriesInDb,
};
