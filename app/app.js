import { users } from "./data/users.js";

import { homeView, userProfileView, loginView } from "./views/view.js";

//this should be in its own controller
// const getItem = (itemID) => items.find((item) => itemID == item.id);
// const requestedItem = getItem(itemID);

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

  /* 
    https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/ 
    https://www.valentinog.com/blog/form-data/
    https://www.w3schools.com/jquery/event_submit.asp
    https://developer.mozilla.org/en-US/docs/Web/API/FormData
    
    Note: when we progress to sending to backend, can just send formData via post.
  */
  //could be added to both save & edit forms using class
  $("#user-profile-edit").submit(function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    for (const formElement of formData) {
      console.log(formElement);
    }
  });
}
$(document).ready(function () {
  initListeners();
});
