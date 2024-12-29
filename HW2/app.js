const posts = [];

const postModal = document.getElementById("postModal");
const viewModal = document.getElementById("viewModal");

const createPostButton = document.getElementById("createPost");
const closeModalButton = document.getElementById("closeModal");
const submitPostButton = document.getElementById("submitPost");
const closeViewModalButton = document.getElementById("closeViewModal");

const postTitleInput = document.getElementById("postTitle");
const postContentInput = document.getElementById("postContent");

const postList = document.getElementById("postList"); // To display the list of posts
const viewModalTitle = document.getElementById("viewModalTitle");
const viewModalContent = document.getElementById("viewModalContent");
const viewModalTime = document.getElementById("viewModalTime");

createPostButton.addEventListener("click", () => {
    postModal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    postModal.style.display = "none";
    clearInputs();
});

closeViewModalButton.addEventListener("click", () => {
    viewModal.style.display = "none";
});

submitPostButton.addEventListener("click", () => {
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();
    const time = new Date().toLocaleString();

    if (title && content) {
        posts.push({ title, content, time });
        renderPosts(posts);
        postModal.style.display = "none";
        clearInputs();
    } else {
        alert("Please enter both a title and content.");
    }
});

function renderPosts(posts) {
    postList.innerHTML = ""; // Clear the list before re-rendering
    posts.forEach((post, index) => {
        const postItem = document.createElement("div");
        postItem.className = "post-item";
        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.time}</p>
            <button onclick="viewPost(${index})">View</button>
        `;
        postList.appendChild(postItem);
    });
}

function viewPost(index) {
    const post = posts[index];
    viewModalTitle.textContent = post.title;
    viewModalContent.textContent = post.content;
    viewModalTime.textContent = post.time;
    viewModal.style.display = "flex";
}

function clearInputs() {
    postTitleInput.value = "";
    postContentInput.value = "";
}
