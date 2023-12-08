const Post=require("../models/Post")
module.exports = {
    getPosts: (req, res) => {
        res.status(200).json({
            "title": "Our first post",
            "content": "The content of our first post"
        });
    },

    createPost: (req, res) => {
        const title = req.body.title;
        const content = req.body.content;
        const post = new Post({
            title:title, 
            content:content
        })
        post.save()
        .then(result=>{
            res.status(201).json({
                message: "Post created successfully",
                post: {
                    title: title,
                    content: content
                }
            })
        })
        .catch(err=>{
            console.log(err)
        }) 
    }
}