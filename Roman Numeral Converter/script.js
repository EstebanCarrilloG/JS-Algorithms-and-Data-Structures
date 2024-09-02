let number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function validateInput(){
  let numberValue = number.value;

  output.removeAttribute("hidden");
  if(numberValue ==""){
    output.classList.add("error");
    output.innerText ="Please enter a valid number";

  } else if(numberValue <=0){
    output.classList.add("error");
    output.innerText ="Please enter a number greater than or equal to 1";
  }else if(numberValue >= 4000){
    output.classList.add("error");
    output.innerText ="Please enter a number less than or equal to 3999";
  }else{
    output.classList.remove("error");
    output.innerText = convertNumber(numberValue);
  }
}

function convertNumber(number){
const numbers = [
  {
  1:"I",
  2:"II",
  3:"III",
  4:"IV",
  5:"V",
  6:"VI",
  7:"VII",
  8:"VIII",
  9:"IX",
  10:"X",
  40:"XL",
  50:"L",
  90:"XC",
  100:"C",
  400:"CD",
  500:"D",
  900:"CM",
  1000:"M"
}];


let miles=(number%10000-number%1000)/1000;
let hundreds=(number%1000-number%100)/100;
let tens=(number%100-number%10)/10;
let units=number%10;

console.log(units)


if(numbers[0][number]){
  return numbers[0][number];
}

if(number < 4){
  return numbers[0][number];
}else if(number < 10){
  return numbers[0][5] + numbers[0][units]; 
}else if(number < 40){
  return numbers[0][10].repeat(number / 10) + (units === 0 ? "":numbers[0][units]);
}else if (number < 50){
  return numbers[0][40] + numbers[0][units];
}else if (number < 90){
  return numbers[0][50] + (units === 0 ? numbers[0][10].repeat(tens - 5): numbers[0][10].repeat(tens - 5) + numbers[0][units]);
}else if (number < 100){
  return numbers[0][90] + numbers[0][units];
}else if (number < 400){
  return numbers[0][100].repeat(number / 100) + (units === 0 && tens === 0 ? "":
  ((tens * 10 + units) < 10) 
    ? numbers[0][units]
  :((tens * 10 + units)  < 40) 
    ? (numbers[0][10].repeat(tens / 1)) + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 50) 
    ?  numbers[0][40] + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 90) 
    ? numbers[0][50] + (units === 0 ? numbers[0][10].repeat(tens - 5): numbers[0][10].repeat(tens - 5) + numbers[0][units])
   :((tens * 10 + units)  < 100)
    ? numbers[0][90] + numbers[0][units]
  :0
  )
}
else if(number < 500){
  return numbers[0][400] + (
  ((tens * 10 + units) < 10) 
    ? numbers[0][units]
  :((tens * 10 + units)  < 40) 
    ? (numbers[0][10].repeat(tens / 1)) + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 50) 
    ?  numbers[0][40] + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 90) 
    ? numbers[0][50] + (units === 0 ? numbers[0][10].repeat(tens - 5): numbers[0][10].repeat(tens - 5) + numbers[0][units])
   :((tens * 10 + units)  < 100)
    ? numbers[0][90] + numbers[0][units]
  :0
  )

}

else if(number < 900){
  return (numbers[0][500] +numbers[0][100].repeat(hundreds - 5)) + (units === 0 && tens === 0 ? "" :
  ((tens * 10 + units) < 10) 
    ? numbers[0][units]
  :((tens * 10 + units)  < 40) 
    ? (numbers[0][10].repeat(tens / 1)) + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 50) 
    ?  numbers[0][40] + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 90) 
    ? numbers[0][50] + (units === 0 ? numbers[0][10].repeat(tens - 5): numbers[0][10].repeat(tens - 5) + numbers[0][units])
   :((tens * 10 + units)  < 100)
    ? numbers[0][90] + numbers[0][units]
  :0
  )

}
else if(number < 1000){
  return (numbers[0][900]) + (
  ((tens * 10 + units) < 10) 
    ? numbers[0][units]
  :((tens * 10 + units)  < 40) 
    ? (numbers[0][10].repeat(tens / 1)) + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 50) 
    ?  numbers[0][40] + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 90) 
    ? numbers[0][50] + (units === 0 ? numbers[0][10].repeat(tens - 5): numbers[0][10].repeat(tens - 5) + numbers[0][units])
   :((tens * 10 + units)  < 100)
    ? numbers[0][90] + numbers[0][units]
  :0
  )

}

else if(number < 4000){
  return (numbers[0][1000].repeat(miles) )  + ( hundreds * 100 < 400 ?  numbers[0][100].repeat(hundreds):hundreds * 100 < 500 ?numbers[0][400]: hundreds * 100 < 900 ? numbers[0][500] + numbers[0][100].repeat(hundreds - 5):hundreds * 100 < 1000 ? numbers[0][900]  : 0 ) + (units === 0 && tens === 0 ? "" :
  ((tens * 10 + units) < 10) 
    ? numbers[0][units]
  :((tens * 10 + units)  < 40) 
    ? (numbers[0][10].repeat(tens / 1)) + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 50) 
    ?  numbers[0][40] + (units == 0 ? "":numbers[0][units])
  :((tens * 10 + units)  < 90) 
    ? numbers[0][50] + (units === 0 ? numbers[0][10].repeat(tens - 5): numbers[0][10].repeat(tens - 5) + numbers[0][units])
   :((tens * 10 + units)  < 100)
    ? numbers[0][90] + numbers[0][units]
  :0
  )

}
}

convertBtn.onclick = validateInput;