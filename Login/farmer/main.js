// Sample data for initial testing
let posts = [
    { id: 1, title: "ITEM 1", content: "This is the first item." },
    { id: 2, title: "ITEM 2", content: "This is the second item." }
];

function renderPosts() {
    const postList = document.getElementById("postList");
    postList.innerHTML = "";

    posts.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="editPost(${post.id})">Edit</button>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        postList.appendChild(li);
    });
}

function addPost() {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    if (title && content) {
        const newPost = {
            id: Date.now(),
            title,
            content
        };
        posts.push(newPost);
        renderPosts();
        document.getElementById("postTitle").value = "";
        document.getElementById("postContent").value = "";
    }
}

function editPost(id) {
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
        const newTitle = prompt("Edit Post Title:", posts[postIndex].title);
        const newContent = prompt("Edit Post Content:", posts[postIndex].content);

        if (newTitle !== null && newContent !== null) {
            posts[postIndex].title = newTitle;
            posts[postIndex].content = newContent;
            renderPosts();
        }
    }
}

function deletePost(id) {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
        posts = posts.filter(post => post.id !== id);
        renderPosts();
    }
}

// Initial rendering of posts
renderPosts();
