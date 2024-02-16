
const validate = require('../middleware/validationMiddleware');

const getAllBlogs = (req, res) => {

  res.json({ blogs: [] });
};

const createBlog = (req, res) => {

  res.json({ message: 'Blog created successfully' });
};

const getBlogByAuthorId = (req, res) => {

  validate.validateAuthorID(req, res);
  res.json({ blog: {} });
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogByAuthorId,
};