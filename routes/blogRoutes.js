const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const validationMiddleware = require('../middleware/validationMiddleware');
const routerMiddleware = require('../middleware/routerMiddleware');

router.use(routerMiddleware); 

router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.get('/:authorId', validationMiddleware.validateAuthorID, blogController.getBlogByAuthorId);

module.exports = router;
