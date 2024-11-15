let number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function validateInput(e) {
  e.preventDefault();
  let numberValue = number.value;

  
  if (numberValue == "") {
    output.classList.add("error");
    output.innerText = "Please enter a valid number";
  } else if (numberValue <= 0) {
    output.classList.add("error");
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (numberValue >= 4000) {
    output.classList.add("error");
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    output.classList.remove("error");
    output.innerText = convertNumber(numberValue);
    output.removeAttribute("hidden");
  }
}

function convertNumber(number) {
  const numbers =
    {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };

  let miles = ((number % 10000) - (number % 1000)) / 1000;
  let hundreds = ((number % 1000) - (number % 100)) / 100;
  let tens = ((number % 100) - (number % 10)) / 10;
  let units = number % 10;

  console.log(units);

  if (numbers[number]) {
    return numbers[number];
  }

  if (number < 4) {
    return numbers[number];
  } else if (number < 10) {
    return numbers[5] + numbers[units];
  } else if (number < 40) {
    return (
      numbers[10].repeat(number / 10) +
      (units === 0 ? "" : numbers[units])
    );
  } else if (number < 50) {
    return numbers[40] + numbers[units];
  } else if (number < 90) {
    return (
      numbers[50] +
      (units === 0
        ? numbers[10].repeat(tens - 5)
        : numbers[10].repeat(tens - 5) + numbers[units])
    );
  } else if (number < 100) {
    return numbers[90] + numbers[units];
  } else if (number < 400) {
    return (
      numbers[100].repeat(number / 100) +
      (units === 0 && tens === 0
        ? ""
        : tens * 10 + units < 10
        ? numbers[units]
        : tens * 10 + units < 40
        ? numbers[10].repeat(tens / 1) +
          (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 50
        ? numbers[40] + (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 90
        ? numbers[50] +
          (units === 0
            ? numbers[10].repeat(tens - 5)
            : numbers[10].repeat(tens - 5) + numbers[units])
        : tens * 10 + units < 100
        ? numbers[90] + numbers[units]
        : 0)
    );
  } else if (number < 500) {
    return (
      numbers[400] +
      (tens * 10 + units < 10
        ? numbers[units]
        : tens * 10 + units < 40
        ? numbers[10].repeat(tens / 1) +
          (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 50
        ? numbers[40] + (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 90
        ? numbers[50] +
          (units === 0
            ? numbers[10].repeat(tens - 5)
            : numbers[10].repeat(tens - 5) + numbers[units])
        : tens * 10 + units < 100
        ? numbers[90] + numbers[units]
        : 0)
    );
  } else if (number < 900) {
    return (
      numbers[500] +
      numbers[100].repeat(hundreds - 5) +
      (units === 0 && tens === 0
        ? ""
        : tens * 10 + units < 10
        ? numbers[units]
        : tens * 10 + units < 40
        ? numbers[10].repeat(tens / 1) +
          (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 50
        ? numbers[40] + (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 90
        ? numbers[50] +
          (units === 0
            ? numbers[10].repeat(tens - 5)
            : numbers[10].repeat(tens - 5) + numbers[units])
        : tens * 10 + units < 100
        ? numbers[90] + numbers[units]
        : 0)
    );
  } else if (number < 1000) {
    return (
      numbers[900] +
      (tens * 10 + units < 10
        ? numbers[units]
        : tens * 10 + units < 40
        ? numbers[10].repeat(tens / 1) +
          (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 50
        ? numbers[40] + (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 90
        ? numbers[50] +
          (units === 0
            ? numbers[10].repeat(tens - 5)
            : numbers[10].repeat(tens - 5) + numbers[units])
        : tens * 10 + units < 100
        ? numbers[90] + numbers[units]
        : 0)
    );
  } else if (number < 4000) {
    return (
      numbers[1000].repeat(miles) +
      (hundreds * 100 < 400
        ? numbers[100].repeat(hundreds)
        : hundreds * 100 < 500
        ? numbers[400]
        : hundreds * 100 < 900
        ? numbers[500] + numbers[100].repeat(hundreds - 5)
        : hundreds * 100 < 1000
        ? numbers[900]
        : 0) +
      (units === 0 && tens === 0
        ? ""
        : tens * 10 + units < 10
        ? numbers[units]
        : tens * 10 + units < 40
        ? numbers[10].repeat(tens / 1) +
          (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 50
        ? numbers[40] + (units == 0 ? "" : numbers[units])
        : tens * 10 + units < 90
        ? numbers[50] +
          (units === 0
            ? numbers[10].repeat(tens - 5)
            : numbers[10].repeat(tens - 5) + numbers[units])
        : tens * 10 + units < 100
        ? numbers[90] + numbers[units]
        : 0)
    );
  }
}

form.addEventListener("submit", validateInput);
