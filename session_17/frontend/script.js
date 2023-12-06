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