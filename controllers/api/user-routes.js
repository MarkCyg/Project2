const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Tag, Category, PostTag } = require('../../models');
<<<<<<< HEAD
=======
const withAuth = require('../../utils/auth');
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb

//GET all users without password
router.get('/', (req, res) => {
    User.findAll({
<<<<<<< HEAD
        // attributes: { exclude: ['password'] }
=======
        attributes: { exclude: ['password'] }
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET specific user without password, include user's posts and comments
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Post,
<<<<<<< HEAD
                attributes: ['id', 'post_text', 'category_id', 'tag_id', 'created_at']
=======
                attributes: ['id', 'post_title','post_text', 'category_id', 'tag_id', 'created_at']
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
<<<<<<< HEAD
                    attributes: ['post_text']
=======
                    attributes: ['post_title', 'post_text']
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
                }
            },
            // {
            //     model: Tag,
            //     attributes: ['post_text'],
            //     through: Vote,
            //     as: 'voted_posts'
            // }
        ]
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//POST create user
<<<<<<< HEAD
router.post('/', (req, res) => {
=======
router.post('/',
 (req, res) => {
     console.log(req.body);
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(dbUserData => {
<<<<<<< HEAD
            res.json(dbUserData);
=======
        console.log(dbUserData);
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//POST login route
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
<<<<<<< HEAD
=======
        console.log(dbUserData);
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
<<<<<<< HEAD
            res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
})

//DELETE user route
router.delete('/:id',
// withAuth,
(req, res) => {
=======
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        })
    });
});

//POST logout route
router.post('/logout',
withAuth,
(req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

//DELETE user route
router.delete('/:id', withAuth, (req, res) => {
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;