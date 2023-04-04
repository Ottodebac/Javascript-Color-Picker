const redBox = document.querySelector(".red-box");
const blueBox = document.querySelector(".blue-box");
const greenBox = document.querySelector(".green-box");
const yellowBox = document.querySelector(".yellow-box");

const containers = document.querySelectorAll(".container");

containers.forEach(container => {
  container.addEventListener("click", (event) => {
    console.log(`${event.target.className} clicked - Color: ${window.getComputedStyle(event.target.firstElementChild).getPropertyValue("background-color")}`);
  });
});

redBox.addEventListener("click", (event) => {
  console.log("Red box clicked");
  window.prompt(`The RGB color of the red box is: ${window.getComputedStyle(event.target).getPropertyValue('background-color')}`);
});

blueBox.addEventListener("click", (event) => {
  window.prompt(`The RGB color of the blue box is: ${window.getComputedStyle(event.target).getPropertyValue('background-color')}`);
});

greenBox.addEventListener("click", (event) => {
  window.prompt(`The RGB color of the green box is: ${window.getComputedStyle(event.target).getPropertyValue('background-color')}`);
});

yellowBox.addEventListener("click", (event) => {
  window.prompt(`The RGB color of the yellow box is: ${window.getComputedStyle(event.target).getPropertyValue('background-color')}`);
});

