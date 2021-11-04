const numBtn = document.querySelectorAll(".num-btn");
const display = document.querySelector(".display h1");
const backSpace = document.querySelector(".operators img");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const evalBtn = document.querySelector(".num-btn:last-of-type");
const slider = document.querySelector(".slider");
const sliderImg = document.querySelector(".slider img");
const calcBtn = document.querySelectorAll(".slider .calc button");
let evaluate = "";

const sizeController = () => {
  if (display.innerHTML.length < 10) {
    display.style.fontSize = "3rem";
  } else if (display.innerHTML.length < 17) {
    display.style.fontSize = "2rem";
  } else {
    display.style.fontSize = "1rem";
  }
};
const badDisplay = () => {
  if (display.innerHTML === "bad expression") {
    display.innerHTML = "";
    display.style.fontSize = "3rem";
  }
};
calcBtn.forEach((currentBtn) => {
  if (currentBtn.innerHTML === "(") {
    badDisplay();
    currentBtn.addEventListener("click", () => {
      display.innerHTML += "(";
      evaluate += "(";
      sizeController();
    });
  }
  if (currentBtn.innerHTML === ")") {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += ")";
      evaluate += ")";
      sizeController();
    });
  }
  if (currentBtn.innerHTML === "sin") {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += "sin(";
      evaluate += "Math.sin(";
      sizeController();
    });
  }
  if (currentBtn.innerHTML === "cos") {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += "cos(";
      evaluate += "Math.cos(";
      sizeController();
    });
  }
  if (currentBtn.innerHTML === "tan") {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += "tan(";
      evaluate += "Math.tan(";
      sizeController();
    });
  }
  if (currentBtn === calcBtn[3]) {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += "&pi;";
      evaluate += "Math.PI";
      sizeController();
    });
  }
  if (currentBtn.innerHTML === "e") {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += "e";
      evaluate += "Math.exp(1)";
      sizeController();
    });
  }
  if (currentBtn.innerHTML === "!") {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      let factArray = evaluate
        .split("*")
        .join(",")
        .split("/")
        .join(",")
        .split("-")
        .join(",")
        .split("+")
        .join(",")
        .split(",");
      let factNum = factArray[factArray.length - 1];
      let factorial = 1;
      for (let i = 1; i <= factNum; i++) {
        factorial *= i;
      }

      display.innerHTML += "!";
      evaluate = evaluate.slice(0, -factNum.length) + factorial.toString();
      sizeController();
    });
  }
  if (currentBtn === calcBtn[calcBtn.length - 1]) {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += "&#215;10";
      evaluate += "*10";
      sizeController();
    });
  }
});
numBtn.forEach((currentBtn) => {
  if (currentBtn !== numBtn[11]) {
    currentBtn.addEventListener("click", () => {
      badDisplay();
      display.innerHTML += currentBtn.innerText;
      evaluate += currentBtn.innerText;
      sizeController();
    });
  }
});
backSpace.addEventListener("click", () => {
  badDisplay();
  display.innerHTML = display.innerHTML.slice(0, -1);
  evaluate = evaluate.slice(0, -1);
  sizeController();
});
backSpace.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
    display.innerHTML = "";
    evaluate = "";
  },
  false
);
addBtn.addEventListener("click", () => {
  badDisplay();
  display.innerHTML += "+";
  evaluate += "+";
  sizeController();
});
subtractBtn.addEventListener("click", () => {
  badDisplay();
  display.innerHTML += "-";
  evaluate += "-";
  sizeController();
});
multiplyBtn.addEventListener("click", () => {
  badDisplay();
  display.innerHTML += "&#215";
  evaluate += "*";
  sizeController();
});
divideBtn.addEventListener("click", () => {
  badDisplay();
  display.innerHTML += "&#247";
  evaluate += "/";
  sizeController();
});
evalBtn.addEventListener("click", () => {
  sizeController();
  try {
    display.innerHTML = eval(evaluate);
    evaluate = eval(evaluate).toString();
    sizeController();
  } catch (error) {
    display.innerHTML = "bad expression";
    display.style.fontSize = "2rem";
    display.style.textAlign = "right";
    evaluate = "";
  }
});
sliderImg.addEventListener("click", () => {
  slider.classList.toggle("sliding");
});
