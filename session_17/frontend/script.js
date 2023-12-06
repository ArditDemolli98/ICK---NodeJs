const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");

const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");

getBtn.addEventListener("click", ()=>{
    fetch("http://localhost:8080/feed/posts")
    .then(res => res.json())
    .then(res =>{
        console.log(res);
        postTitle.innerHTML = res.title;
        postContent.innerHTML = res.content;
    })
    .catch(err => console.log(err));
})

postBtn.addEventListener("click", ()=>{
    fetch("http://localhost:8080/feed/createPost",{
        method: "POST",
        body: JSON.stringify({
            title: "New post from frontend JS",
            content: "The content of the new post from frontend JS"
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(res =>{
        console.log(res);
    })
    .catch(err => console.log(err));
})