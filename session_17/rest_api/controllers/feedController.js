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

        // Po i ruajme ne databaze
        res.status(201).json({
            message: "Post created successfully",
            post: {
                title: title,
                content: content
            }
        })
    }
}