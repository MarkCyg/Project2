const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Tag, Category, PostTag } = require("../../models");
<<<<<<< HEAD



router.get('', (req, res) => {
   Post.findAll({
       attributes: [
           'id',
=======
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
   Post.findAll({
       attributes: [
           'id',
           'post_title',
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
           'post_text',
           'user_id',
           'created_at',
       ],
       order: [['created_at', 'DESC']],
       include: [
           {
               model: Comment,
               attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
               include: {
                   model: User,
                   attributes: ['username']
               }
           },
           {
               model: User,
               attributes: ['username']
           }
       ]
   })
   .then(dbPostData => res.json(dbPostData))
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });

});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
<<<<<<< HEAD
    attributes: ["id", "title", "user_id", "created_at"],
=======
    attributes: [
        "id",
        "post_title",
        "post_text",
        "user_id",
        "created_at"],
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
<<<<<<< HEAD
        },

        attributes: [
            'id',
            'post_text',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }]
=======
        }
    },
    {
        model: User,
        attributes: ['username']
    }
    ]
    })
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Post with that id Exists' });
            return;
        }
        res.json(dbPostData);

   
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
})
<<<<<<< HEAD
})


router.post('/', (req, res) => {
    Post.create({
        post_text: req.body.post_text,
        category_id: req.body.category_id,
        tag_id: req.body.tag_id,
        // EDIT THIS TO USE AUTHENTICATION
        user_id: 1
=======

router.post('/', withAuth, (req, res) => {
    Post.create({
        post_text: req.body.post_text,
        post_title: req.body.post_title,
        category_id: req.body.category_id,
        tag_id: req.body.tag_id,
        user_id: req.session.user_id
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

<<<<<<< HEAD
router.put('/:id', (req, res) => {
=======
router.put('/:id', withAuth, (req, res) => {
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
    Post.update(
        {
            post_text: req.body.post_text
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
=======
router.delete('/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        if (dbPostData.user_id !== req.session.user_id) {
            res.status(500).json({ message: 'You must be the creator of a post to delete it!' });
            return;
        }
        res.json(dbPostData);
    })
    .then(dbPostData => {
        Post.destroy({
            where: {
              id: req.params.id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
>>>>>>> 566616a901ab890cd1c3877b40c4d50a7676adbb
});

module.exports = router;