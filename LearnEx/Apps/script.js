const tabs = document.querySelectorAll(".operation_tab");
const tabsContainer = document.querySelector(".tab_container");
const tabsContent = document.querySelectorAll(".tab_content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  //   console.log(clicked);
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("active"));
  tabsContent.forEach((t) => t.classList.remove("tab_content--active"));
  clicked.classList.add("active");

  //   console.log(clicked.dataset.tab);

  //   Activate content area
  document
    .querySelector(`.tab_content--${clicked.dataset.tab}`)
    .classList.add("tab_content--active");
});

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
