// console.log(h1);
const changeText = () => {
  const heading = document.getElementsByTagName("h1");

  heading.innerText = "Welcome to Celly Shop";
  // console.log(heading);

  // alert("Hola");
};

changeText();

const changeBack = function () {
  const bodyB = document.querySelector("html");
  bodyB.style.backgroundColor = "#004d39";
};

changeBack();

const address = () => {
  const addresFake = document.getElementsByTagName("address");

  addresFake.innerText = "Torre peantini";
  // console.log((addresFake[0].innerText = "Hola"));
};

address();

const alink = () => {
  const a = document.getElementsByTagName("a");

  for (let link of a) {
    link.classList.add("a-link");
  }
};

alink();

const allImg = () => {
  const imgs = document.getElementsByTagName("img");

  for (let img of imgs) {
    img.classList.toggle("img-tog");
  }
};

allImg();
