var blogForm = document.getElementById("blog-form");
var titleInput = document.getElementById("title-input");
var contentInput = document.getElementById("content-input");
var blogPosts = document.getElementById("blog-posts");

blogForm.addEventListener("submit", createPost);

function createPost(event) {
  event.preventDefault();

  var title = titleInput.value;
  var content = contentInput.value;

  if (title.trim() !== "" && content.trim() !== "") {
    var postElement = document.createElement("div");
    postElement.classList.add("post");

    var titleElement = document.createElement("h2");
    titleElement.textContent = title;
    postElement.appendChild(titleElement);

    var contentElement = document.createElement("p");
    contentElement.textContent = content;
    postElement.appendChild(contentElement);

    blogPosts.appendChild(postElement);

    titleInput.value = "";
    contentInput.value = "";
  }
}
