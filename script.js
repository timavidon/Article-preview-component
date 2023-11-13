const userSection = document.querySelector(".user");
const userPic = document.querySelector(".avatar");
const userProfile = document.querySelector(".profile");
const share = document.querySelector(".share");
const triangle = document.querySelector('.triangle');

const shareBtn = document.querySelector(".share-btn");
const mobileWidth = 500;

shareBtn.addEventListener("click", () => {
  let windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth <= mobileWidth) {
    userPic.classList.toggle("hidden");
    userProfile.classList.toggle("hidden");
    share.classList.toggle("hidden");
    userSection.classList.toggle("share-active-mobile");
  } else {
    triangle.classList.toggle("hidden");
    share.classList.toggle("hidden");
    share.classList.toggle("share-active-desktop");
  }
});
