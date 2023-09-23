const userInput = document.getElementById("date");
const buttonElem = document.querySelector(".js-calculate-btn");
const result = document.getElementById("result");

// You can't enter a future date
userInput.max = new Date().toISOString().split("T")[0];

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const calculateAge = () => {
  if (userInput.value === "") {
    alert("Kindly select a date!");
  } else {
    // Get user input
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    // the current date
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    //   Get the difference
    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old!`;
    userInput.value = "";
  }
};

// calculate and display the age when the calculate button is clicked
buttonElem.addEventListener("click", calculateAge);
