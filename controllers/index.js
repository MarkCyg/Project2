const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
<<<<<<< HEAD

=======
const profileRoutes = require('./profile-routes')
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
const apiRoutes = require('../controllers/api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
<<<<<<< HEAD
=======
router.use('/profile', profileRoutes);
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;