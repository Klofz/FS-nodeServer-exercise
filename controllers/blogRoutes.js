const blogsRouter = require("express").Router();
const BlogEntry = require("../models/blogEntry");

//Routes:
blogsRouter.get("/", (request, response, next) => {
  BlogEntry.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.post("/", async (request, response, next) => {
  const blog = new BlogEntry(request.body);

  const aux = blog.save().then((result) => {
    response.status(201).json(result);
  });

  await aux;
});

blogsRouter.get("/:id", async (request, response, next) => {
  const blogEntry = await BlogEntry.findById(
    request.params.id,
  );

  if (blogEntry) {
    response.json(blogEntry);
  } else {
    response.status(404).end();
  }
});

blogsRouter.delete(
  "/:id",
  async (request, response, next) => {
    await BlogEntry.findByIdAndDelete(request.params.id);
    response.status(204).end();
  },
);

blogsRouter.put("/:id", (request, response, next) => {
  const { title, author, url, likes } = request.body;

  BlogEntry.findByIdAndUpdate(
    request.params.id,
    { title, author, url, likes },
    { new: true, runValidators: true, context: "query" },
  )
    .then((updatedblogEntry) => {
      response.json(updatedblogEntry);
    })
    .catch((error) => next(error));
});

//Export
module.exports = blogsRouter;
