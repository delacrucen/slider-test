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

const content = document.querySelectorAll(".content");
//content slider
buttonRight.addEventListener("click", () => {
  console.log(currentIndex);
  // if(currentIndex ==){}
  switch (currentIndex) {
    case 0:
      content[0].className = "content al apple";
      content[1].className = "content";
      content[2].className = "content";
      content[3].className = "content";
      break;
    case 1:
      content[0].className = "content";
      content[1].className = "content al orange";
      content[2].className = "content";
      content[3].className = "content";
      break;
    case 2:
      content[0].className = "content";
      content[1].className = "content";
      content[2].className = "content al pear";
      content[3].className = "content";
      break;
    case 3:
      content[0].className = "content";
      content[1].className = "content";
      content[2].className = "content";
      content[3].className = "content al grape";
      break;
    default:
      break;
  }
});

//to left
buttonLeft.addEventListener("click", () => {
  console.log(currentIndex);
  // if(currentIndex ==){}
  switch (currentIndex) {
    case 0:
      content[0].className = "content ar apple";
      content[1].className = "content";
      content[2].className = "content";
      content[3].className = "content";
      break;
    case 1:
      content[0].className = "content";
      content[1].className = "content ar orange";
      content[2].className = "content";
      content[3].className = "content";
      break;
    case 2:
      content[0].className = "content";
      content[1].className = "content";
      content[2].className = "content ar pear";
      content[3].className = "content";
      break;
    case 3:
      content[0].className = "content";
      content[1].className = "content";
      content[2].className = "content";
      content[3].className = "content ar grape";
      break;
    default:
      break;
  }
});
