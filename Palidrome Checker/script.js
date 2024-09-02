const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function reverseString(text){
  let re =  new RegExp("^[a-zA-Z0-9]*$");
  let textCleaned = [];
  let splitText = text.split("");

  splitText.map((e) =>{
   e.match(re) ? textCleaned.push(e) :0; 
  });

  if(textCleaned.join("") === textCleaned.reverse().join("")){
    result.innerText = text.toLowerCase() + " is a palindrome.";
  }else{
    result.innerText = text.toLowerCase() + " is not a palindrome";
  }
}

function comprovation(text){
  if(text.length == 1){
      result.innerText = text + " is a palindrome";
    } else if(text.length > 1){
        reverseString(text);

    }

}

function validate(){
const inputValue = textInput.value.toUpperCase();
  if(inputValue !== ""){
    comprovation(inputValue);
  } else{
    alert("Please input a value");
  }
}

checkBtn.onclick = validate;