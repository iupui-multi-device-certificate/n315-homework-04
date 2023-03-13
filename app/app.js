import { users } from "./data/users.js";

import { homeView, userProfileView, loginView } from "./views/view.js";

const titleBase = "DevConnect";

const routes = {
  home: homeView("Form Examples"),
  create: userProfileView(),
  edit: userProfileView(users[0], true),
  login: loginView(),
};

const changeRoute = () => {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  //set to home if empty string
  if (pageID == "") {
    pageID = "home";
  }
  document.getElementById("app").innerHTML = routes[pageID];
  $(document).attr("title", `${titleBase} | ${pageID.toUpperCase()}`);
};

const toggleMobileMenu = () => {
  $(".hamburger").toggleClass("active");
  $(".nav-menu").toggleClass("active");
};

/*
    https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/
    https://www.valentinog.com/blog/form-data/
    https://www.w3schools.com/jquery/event_submit.asp
    https://developer.mozilla.org/en-US/docs/Web/API/FormData

    Note: when we progress to sending to backend, can just send formData via post.
*/
const handleSubmit = (e) => {
  /*
    TODO: fix - the prevent default does not work the first time the page loads.
    after page loads, preventDefault works. clicking submit button does not wipe out data, etc.
  */
  e.preventDefault();

  const formData = new FormData(e.currentTarget.form);

  for (const formElement of formData) {
    console.log(formElement);
  }
};

function initListeners() {
  $(window).on("hashchange", changeRoute);
  changeRoute();

  $(".hamburger").click(function (e) {
    toggleMobileMenu();
  });

  //close when click a nav link
  $(".nav-link").click(function (e) {
    toggleMobileMenu();
  });

  //add listener on each button
  let elements = document.querySelectorAll(".btn");

  elements.forEach((item) => {
    item.addEventListener("click", handleSubmit);
  });
}
$(document).ready(function () {
  initListeners();
});
