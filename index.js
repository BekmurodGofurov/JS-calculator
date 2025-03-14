let inputBox = document.querySelector("#inputBox");
let result = document.querySelector("#result")
let equal = document.querySelector("#equal")
let devision = document.querySelector("#dev")
let clearAc = document.querySelector("#ac")

document.querySelectorAll('.num, .oparator').forEach(button => {
  button.addEventListener("click", function(){
    inputBox.value += this.textContent;
  });
});


equal.addEventListener("click", function(){
  let value = inputBox.value 
  try {
    result.textContent = eval(value)
    inputBox.value =""    
  } catch (error) {
      let alert = document.createElement("div");
    alert.textContent = "Xato iltimos raqamdan va {-,+,/,*,() foydanaling";
    alert.className = `error`;
    document.body.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 5000);
  }
})

clearAc.addEventListener("click", function(){
  inputBox.value = ""
  result.textContent = ""
})
