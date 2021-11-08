const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
<<<<<<< HEAD
=======
const tagRoutes = require('./tag-routes');
const categoryRoutes = require('./category-routes');
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb


router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
<<<<<<< HEAD
=======
router.use('/tags', tagRoutes);
router.use('/categories', categoryRoutes);
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb

module.exports = router;