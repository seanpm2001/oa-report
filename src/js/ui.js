/* Tabbed navigation */
let tabs = document.querySelector(".js-tabs"),
    tabItems = tabs.querySelectorAll(".js-tab-item a");

tabItems.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabID = this.getAttribute("href"),
        tabContent = document.querySelector(".js-tab-content");

    for (let i = 0; i < tabContent.children.length; i++) {

      tabItems[i].classList.remove("border-carnation-500", "text-carnation-600");
      tabItems[i].classList.add("hover:text-neutral-700", "hover:border-neutral-200");

      tabContent.children[i].classList.remove("hidden");

      if ("#" + tabContent.children[i].id === tabID) {
        continue;
      }
      tabContent.children[i].classList.add("hidden");

    }
    e.target.classList.add("border-carnation-500", "text-carnation-600");
    e.target.classList.remove("hover:text-neutral-700", "hover:border-neutral-200");
  });
});

/* Quick selects pills */
let quickDateItems = document.querySelectorAll(".js-pill");

quickDateItems.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    for (let i = 0; i < quickDateItems.length; i++) {
      quickDateItems[i].classList.remove("bg-carnation-500");
      quickDateItems[i].classList.add("bg-neutral-700");
    }
    e.target.classList.add("bg-carnation-500");
    e.target.classList.remove("bg-neutral-700");
  });
});
