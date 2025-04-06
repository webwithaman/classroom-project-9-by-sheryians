// Profiles
let profiles = [
  {
    profilePic: "../assets/images/profile-pic-1.jpg",
    post: "../assets/images/post-1.jpg",
    isLiked: false,
  },
  {
    profilePic: "../assets/images/profile-pic-2.jpg",
    post: "../assets/images/post-2.jpg",
    isLiked: false,
  },
  {
    profilePic: "../assets/images/profile-pic-3.jpg",
    post: "../assets/images/post-3.avif",
    isLiked: false,
  },
  {
    profilePic: "../assets/images/profile-pic-4.jpg",
    post: "../assets/images/post-4.avif",
    isLiked: false,
  },
  {
    profilePic: "../assets/images/profile-pic-5.jpg",
    post: "../assets/images/post-5.avif",
    isLiked: false,
  },
  {
    profilePic: "../assets/images/profile-pic-6.jpg",
    post: "../assets/images/post-6.jpg",
    isLiked: false,
  },
  {
    profilePic: "../assets/images/profile-pic-7.jpg",
    post: "../assets/images/post-7.jpg",
    isLiked: false,
  },
  {
    profilePic: "../assets/images/profile-pic-8.jpg",
    post: "../assets/images/post-8.jpg",
    isLiked: false,
  },
];

// Get Custom Pointer
let customPointer = document.querySelector(".custom-pointer");

//  Move Pointer ALong with Mouse Move
document.addEventListener("mousemove", function (eventObj) {
  customPointer.style.left = eventObj.x - 10 + "px";
  customPointer.style.top = eventObj.y - 10 + "px";
});

// Traverse Profiles & Display Posts
let posts = "";
profiles.forEach(function (profile) {
  posts += `
       <div class="post">
            <div class="post-header">
              <div class="profile-img-box">
                <img src="${profile.profilePic}" alt="not found" />
              </div>
              <div>
                <h5>John Doe</h5>
                <p>The Local Train</p>
              </div>
            </div>
            <div class="post-body">
              <i class="ri-heart-fill double-tap-heart"></i>
              <i class="ri-heart-fill animate-heart"></i>
              <img class="post-media" src="${profile.post}" alt="" />
            </div>
            <div class="post-footer">
              <div>
                <i class="ri-heart-line heart-icon icon"></i>
                <i class="ri-chat-1-line comment-icon icon"></i>
              </div>
              <img
                class="post-save-icon"
                src="../assets/images/save.png"
                alt="not found"
              />
            </div>
          </div>
   `;
});

// Pushinh Posts in Posts Container
document.querySelector(".posts-container").innerHTML = posts;

// Get Navbar, Hide & Show Navbar on Scroll
let navbar = document.querySelector(".navbar");
let postsContainer = document.querySelector(".posts-container");

// Hide & Show Navbar on Scroll
window.addEventListener("wheel", function (e) {
  if (e.deltaY < 0) {
    navbar.style.transform = "translateY(0)";
  } else {
    if (postsContainer.getClientRects()[0].y < 40)
      navbar.style.transform = "translateY(-100%)";
  }
});

let heartIcons = document.querySelectorAll(".heart-icon");
let postBodies = document.querySelectorAll(".post-body");
let timeOutDuration = 2200;

postBodies.forEach(function (element, index) {
  element.addEventListener("dblclick", function () {
    if (profiles[index].isLiked) return;

    heartIcons[index].classList.remove("ri-heart-line");
    heartIcons[index].classList.add("ri-heart-fill");

    this.querySelector(".double-tap-heart").classList.add(
      "animate-double-tap-heart"
    );
    profiles[index].isLiked = true;

    this.querySelector(".animate-heart").classList.remove("animate-heart-icon");
    this.querySelector(".animate-heart").classList.add("animate-heart-icon");

    setTimeout(
      function (element) {
        element
          .querySelector(".double-tap-heart")
          .classList.remove("animate-double-tap-heart");
        element
          .querySelector(".animate-heart")
          .classList.remove("animate-heart-icon");
      },

      timeOutDuration,
      this
    );
  });
});

heartIcons.forEach(function (element, index) {
  element.addEventListener("click", function () {
    if (this.classList.contains("ri-heart-line")) {
      profiles[index].isLiked = true;
      this.classList.remove("ri-heart-line");
      this.classList.add("ri-heart-fill");

      postBodies[index]
        .querySelector(".double-tap-heart")
        .classList.add("animate-double-tap-heart");

      postBodies[index]
        .querySelector(".animate-heart")
        .classList.remove("animate-heart-icon");
      postBodies[index]
        .querySelector(".animate-heart")
        .classList.add("animate-heart-icon");

      setTimeout(
        function (element) {
          element
            .querySelector(".double-tap-heart")
            .classList.remove("animate-double-tap-heart");
          element
            .querySelector(".animate-heart")
            .classList.remove("animate-heart-icon");
        },

        timeOutDuration,
        postBodies[index]
      );
    } else {
      profiles[index].isLiked = false;
      this.classList.add("ri-heart-line");
      this.classList.remove("ri-heart-fill");
      postBodies[index]
        .querySelector(".double-tap-heart")
        .classList.remove("animate-double-tap-heart");

      postBodies[index]
        .querySelector(".animate-heart")
        .classList.remove("animate-heart-icon");
    }
  });
});
