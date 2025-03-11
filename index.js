let inputBox = document.querySelector("#inputBox");
let result = document.querySelector("#result")
let equal = document.querySelector("#equal")
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let num3 = document.querySelector("#num3")
let num4 = document.querySelector("#num4")
let num5 = document.querySelector("#num5")
let num6 = document.querySelector("#num6")
let num7 = document.querySelector("#num7")
let num8 = document.querySelector("#num8")
let num9 = document.querySelector("#num9")
let num0 = document.querySelector("#num0")
let devision = document.querySelector("#dev")
let mult = document.querySelector("#mult")
let dec = document.querySelector("#dec")
let add = document.querySelector("#add")
let point = document.querySelector("#point")
let clearAc = document.querySelector("#ac")


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

num0.addEventListener("click", function(){
  inputBox.value += "0"
})
num1.addEventListener("click", function(){
  inputBox.value += "1"
})
num2.addEventListener("click", function(){
  inputBox.value += "2"
})
num3.addEventListener("click", function(){
  inputBox.value += "3"
})
num4.addEventListener("click", function(){
  inputBox.value += "4"
})
num5.addEventListener("click", function(){
  inputBox.value += "5"
})
num6.addEventListener("click", function(){
  inputBox.value += "6"
})
num7.addEventListener("click", function(){
  inputBox.value += "7"
})
num8.addEventListener("click", function(){
  inputBox.value += "8"
})
num9.addEventListener("click", function(){
  inputBox.value += "9"
})

devision.addEventListener("click", function(){
  inputBox.value += "/"
})
mult.addEventListener("click", function(){
  inputBox.value += "*"
})
dec.addEventListener("click", function(){
  inputBox.value += "-"
})
add.addEventListener("click", function(){
  inputBox.value += "+"
  console.log("add");
  
})

clearAc.addEventListener("click", function(){
  inputBox.value = ""
  result.textContent = ""
})
