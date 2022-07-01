const router = require("express").Router();
const Posts = require("../models/Posts");
const User = require("../models/Users");

//Create
router.post("/", async (req, res) => {
    const newPost = new Posts(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (post.username == req.body.username) {
            try {
                const updatedPost = await Posts.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can only update your own posts");
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete
router.delete("/:id", async (req, res) => {
    try {
        const posts = await Posts.findById(req.params.id);
        if (posts.username === req.body.username) {
            try {
                await posts.delete();
                res.status(200).json("Post has been deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post")
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

//Get post
router.get("/:id", async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

//Get all posts 
router.get("/", async (req, res) => {
    const username = req.query.user;
    const category = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Posts.find({ username });
        } else if (category) {
            posts = await Posts.find({
                categories: {
                    $in: [category]
                }
            });
        } else {
            posts = await Posts.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;