const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.post("", (req, res, next) => {
    const user = new User({
        fullname: req.body.fullname,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    });

    user.save().then(createdUser => {
        res.status(201).json({
            message: "user added successfully",
            postId: createdUser._id
        });
    });
});

router.put("/:id", (req, res, next) => {

    return User.updateOne(
        { _id: req.params.id },
        {
            $set: {
                fullname: req.body.fullname,
                address: req.body.address,
                phone: req.body.phone,
                email: req.body.email
            }

        }
    ).then(result=>{
        res.status(200).json({ message: "Update successful!" });
    })
   
});

router.get("", (req, res, next) => {
    User.find().then(documents => {
        res.status(200).json({
            message: "Users fetched successfully!",
            posts: documents
        });
    });
});

router.get("/:id", (req, res, next) => {
    User.findById(req.params.id).then(user => {
        if (user) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "User not found!" });
        }
    });
});

router.delete("/:id", (req, res, next) => {
    User.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Post deleted!" });
    });
});

module.exports = router;
