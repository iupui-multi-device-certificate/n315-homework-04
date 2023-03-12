import { users } from "./data/users.js";

import { homeView, userProfileView, loginView } from "./views/view.js";

//this should be in its own controller
// const getItem = (itemID) => items.find((item) => itemID == item.id);
// const requestedItem = getItem(itemID);

const titleBase = "TBD";

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

  $(".btn").click(function (e) {
    // console.log("id of button clicked: ", e.currentTarget.id);s
    alert("id of button clicked: " + e.currentTarget.id);
  });
}
$(document).ready(function () {
  initListeners();
});
