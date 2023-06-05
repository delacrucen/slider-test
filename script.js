const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");
const category = document.querySelectorAll(".category");
let currentIndex = findIndex();
let storeHistory = [];
storeHistory.push(currentIndex);

function findIndex() {
  for (let i = 0; i < category.length; i++) {
    if (category[i].classList.contains("category-active")) {
      return i;
    }
  }
}

buttonLeft.addEventListener("click", () => {
  //itera el index actual
  currentIndex = currentIndex - 1;
  //almacena el valor del index en un array
  if (currentIndex < 0) {
    currentIndex = category.length - 1;
  }
  storeHistory.push(currentIndex);
  changeActive(storeHistory);
});

buttonRight.addEventListener("click", () => {
  //itera el index actual
  currentIndex = currentIndex + 1;
  //almacena el valor del index en un array
  if (currentIndex > category.length - 1) {
    currentIndex = 0;
  }
  storeHistory.push(currentIndex);
  changeActive(storeHistory[storeHistory.length - 1]);
});

function changeActive(index) {
  category[storeHistory[storeHistory.length - 1]].classList.add(
    "category-active"
  );
  if (storeHistory.length > 0) {
    category[storeHistory[storeHistory.length - 2]].classList.remove(
      "category-active"
    );
  }
}
