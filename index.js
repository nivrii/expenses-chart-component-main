// Get the canvas element.
const height = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const days = document.getElementsByClassName("days");
const dayElements = Array.from(days);
const info = document.getElementsByClassName("info");
const infoElements = Array.from(info);
const total = document.getElementById("big");

let max = Math.max(...height);
let index = height.indexOf(max);
dayElements[index].style.backgroundColor = "hsl(186, 34%, 60%)";

for (let i = 0; i < height.length; i++) {
  dayElements[i].style.height = height[i] * 3 + "px";
}

for (let j = 0; j < height.length; j++) {
  dayElements[j].addEventListener("mouseover", () => {
    infoElements[j].style.visibility = "visible";
    infoElements[j].innerHTML = "<p>$" + height[j] + "<p>";

    if (j === index) {
      dayElements[index].style.backgroundColor = "hsl(186, 34%, 73%)";
    } else {
      dayElements[j].style.backgroundColor = "hsl(10, 79%, 70%)";
    }

    dayElements[j].addEventListener("mouseout", () => {
      infoElements[j].style.visibility = "hidden";

      if (j === index) {
        dayElements[index].style.backgroundColor = "hsl(186, 34%, 60%)";
      } else {
        dayElements[j].style.backgroundColor = "hsl(10, 79%, 65%)";
      }
    });
  });
}
const sum = height.reduce((incr, tot) => incr + tot, 0);
total.textContent = "$"+sum;
