const Post = require("../models/Post")
module.exports = {
    getPosts: async(req, res) => {
        try {
            const posts = await Post.find()
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({message: error.message});
        } 
    },

    createPost: async(req, res) => {
        try {
            const title = req.body.title;
            const content = req.body.content;
            const post = new Post({
                title:title, 
                content:content
            })
            await post.save();
            res.status(201).json({
                message: "Post created successfully",
                post: {
                    title: title,
                    content: content
                }
            })
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },

    getPostById: (req, res) =>{
        const postId = req.params.id;

        Post.findById(postId)
        .then(post => {
            if(!post) {
                res.status(404).json({
                    message: "This post could not be found!"
                })
            }
            res.status(200).json({
                post
            })   
        })
        .catch(err=>{
            res.status(500).json({message: err.message});
        })
    },

    updatePost: (req, res) =>{
        const postId = req.params.id;
        const title = req.body.title;
        const content = req.body.content;

        Post.findById(postId)
        .then(post => {
            if(!post) {
                res.status(404).json({
                    message: "This post could not be found!"
                })
            }
            post.title = title;
            post.content = content;
            return post.save()
            .then(result => {
                res.status(200).json({
                    message: "Post updated successfully",
                    post: result
                })
            })
        })
        .catch(err=>{
            res.status(500).json({message: err.message});
        })
    },

    deletePost: (req, res) => {
        const postId = req.params.id;

        Post.findById(postId)
        .then(post => {
            if(!post){
                res.status(404).json({message: "Post could not be found!"});
            }
            return Post.findOneAndDelete({_id: postId})
            .then(result => {
                res.status(200).json({message: "Post deleted successfully"});
            })
        })
        .catch(err=>{
            res.status(500).json({message: err.message});
        })
    }
}