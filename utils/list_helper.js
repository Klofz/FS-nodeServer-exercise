const logger = require("./logger");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const totalLikes = blogs.reduce((sum, blog) => {
    if (blog.likes) {
      return sum + blog.likes;
    }
    return sum;
  }, 0);
  return totalLikes;
};

const favoriteBlog = (blogs) => {
  const highestLikes = blogs.reduce(
    (highest, blog) =>
      highest < blog.likes ? blog.likes : highest,
    0,
  );

  let topBlog = blogs.find(
    (blog) => blog.likes === highestLikes,
  );

  // console.log(topBlog);

  if (topBlog) {
    topBlog = {
      title: topBlog.title
        ? topBlog.title
        : "Doesn't have a title",
      author: topBlog.author
        ? topBlog.author
        : "Doesn't have a author",
      likes: topBlog.likes,
    };
  } else {
    topBlog = {
      title: "Doesn't have a title",
      author: "Doesn't have a author",
      likes: "Theres no blog here son",
    };
  }
  // console.log(topBlog);
  return topBlog;
};

const mostBlogs = (blogs) => {
  let authorMap = new Map();

  for (let index = 0; index < blogs.length; index++) {
    const author = blogs[index].author;
    if (author) {
      const authorCount = authorMap.get(
        blogs[index].author,
      );

      if (authorCount) {
        authorMap.set(author, authorCount + 1);
      } else {
        authorMap.set(author, 1);
      }
    }
  }

  const highestAuthor = [...authorMap.entries()].reduce(
    (highest, current) =>
      highest[1] > current[1] ? highest : current,
  );

  return {
    author: highestAuthor[0],
    blogs: highestAuthor[1],
  };
};

const mostLikes = (blogs) => {
  const authorMostLikeBlog = favoriteBlog(blogs).author;
  let totalLikes = 0;

  for (let index = 0; index < blogs.length; index++) {
    const author = blogs[index].author;
    if (
      author &&
      authorMostLikeBlog === author &&
      blogs[index].likes
    ) {
      totalLikes += blogs[index].likes;
    }
  }

  return {
    author: authorMostLikeBlog,
    total_likes: totalLikes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
