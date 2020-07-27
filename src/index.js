import decipher from './decipher.js'
import cipher from './cipher.js'
      
  console.log(cipher("VERONICA"));
  console.log(decipher("KTGDCXRP", 15));

  document.querySelector('#getCipherButton').addEventListener('click', getCipher);

  document.querySelector('#getDecipherButton').addEventListener('click', getDecipher);

  document.querySelector('#endCipherButton').addEventListener('click', endCipher);

  document.querySelector('#decrementValueButton').addEventListener('click', decrementValueCipher);

  document.querySelector('#incrementValueButton').addEventListener('click', incrementValueCipher);

  document.querySelector('#decrementValueButton2').addEventListener('click', decrementValueDecipher);

  document.querySelector('#incrementValueButton2').addEventListener('click', incrementValueDecipher);

  document.querySelector('#endDecipherButton').addEventListener('click', endDecipher);

  document.querySelector('#endCipherButton').addEventListener('click', clearTextareaCipher);
  
  document.querySelector('#endDecipherButton').addEventListener('click', clearTextareaDecipher);
  
  debugger;
        
  function getCipher(){

    let leaveInicio = document.getElementById("inicio");
    leaveInicio.classList.add("hide");
  
    let displayCipher = document.getElementById("cipher");
    displayCipher.classList.remove("hide");
  
  }

  function getDecipher(){

    let leaveInicio = document.getElementById("inicio");
    leaveInicio.classList.add("hide");
  
    let displayCipher = document.getElementById("decipher");
    displayCipher.classList.remove("hide");
  
  }


  function endCipher(){

    let leaveCipher = document.getElementById("cipher");
    leaveCipher.classList.add("hide");

    let displayInicio = document.getElementById("inicio");
    displayInicio.classList.remove("hide"); 
      
  }

  
  function incrementValueCipher(){

  let value = parseInt(document.getElementById('numberCipher').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('numberCipher').value = value;
  }

  function decrementValueCipher(){

    let value = parseInt(document.getElementById('numberCipher').value, 10);
    if (value < 0){
      value = 0;
    }
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberCipher').value = value;
  }


  function incrementValueDecipher(){

    let value = parseInt(document.getElementById('numberDecipher').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberDecipher').value = value;
  }

  function decrementValueDecipher(){

    let value = parseInt(document.getElementById('numberDecipher').value, 10);
    if (value < 0){
      value = 0;
    }
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberDecipher').value = value;
  }
  
  function endDecipher(){

    let leaveCipher = document.getElementById("decipher");
    leaveCipher.classList.add("hide");

    let displayInicio = document.getElementById("inicio");
    displayInicio.classList.remove("hide"); 
      
  }
 
  // CIFRADO estamos escribiendo automaticamente con el desplazamiento por default

  let textareaOne = document.querySelector('#box1');
  let textareaTwo = document.querySelector('#box2');
  let offset1 =  document.querySelector('#numberCipher');
  let handlerOne = null;

  handlerOne = function(autoWriteOne) {
    autoWriteOne.preventDefault();
    let offsetNum1 = parseInt(offset1.value);
    textareaTwo.innerHTML = cipher(textareaOne.value, offsetNum1);
  }
  textareaOne.addEventListener('keyup', handlerOne);


  // estamos escribiendo automaticamente con el desplazamiento personalizado

  let textareaThree = document.querySelector('#box1');
  let textareaFour = document.querySelector('#box2');
  let offset2 =  document.querySelector('#numberCipher');
  let handlerTwo = null;
  
    handlerTwo = function(autoWriteTwo) {
    autoWriteTwo.preventDefault();
    let offsetNum2 = parseInt(offset2.value);
    textareaFour.innerHTML = cipher(textareaThree.value, offsetNum2);
  }
  offset2.addEventListener('click', handlerTwo);

  
  // estamos escribiendo automaticamente con el desplazamiento con boton +

  let textareaFive = document.querySelector('#box1');
  let textareaSix = document.querySelector('#box2');
  let offset3 =  document.querySelector('#numberCipher');
  let handlerThree = null;
  
    handlerThree = function(autoWriteThree) {
    autoWriteThree.preventDefault();
    let offsetNum3 = parseInt(offset3.value);
    textareaSix.innerHTML = cipher(textareaFive.value, offsetNum3);
  }
  document.querySelector('#incrementValueButton').addEventListener('click', handlerThree);
  

  // estamos escribiendo automaticamente con el desplazamiento con boton -

  let textareaSeven = document.querySelector('#box1');
  let textareaEight = document.querySelector('#box2');
  let offset4 =  document.querySelector('#numberCipher');
  let handlerFour = null;
  
    handlerFour = function(autoWriteFour) {
    autoWriteFour.preventDefault();
    let offsetNum4 = parseInt(offset4.value);
    textareaEight.innerHTML = cipher(textareaSeven.value, offsetNum4);
  }
  document.querySelector('#decrementValueButton').addEventListener('click', handlerFour);



// DECIFRADO estamos escribiendo automaticamente con el desplazamiento por default

  let textareaNine = document.querySelector('#box3');
  let textareaTen = document.querySelector('#box4');
  let offset5 =  document.querySelector('#numberDecipher');
  let handlerFive = null;

  handlerFive = function(autoWriteFive) {
    autoWriteFive.preventDefault();
    let offsetNum5 = parseInt(offset5.value);
    textareaTen.innerHTML = decipher(textareaNine.value, offsetNum5);
  }
  textareaNine.addEventListener('keyup', handlerFive);

 // estamos escribiendo automaticamente con el desplazamiento personalizado

  let textareaEleven = document.querySelector('#box3');
  let textareaTwelve = document.querySelector('#box4');
  let offset6 =  document.querySelector('#numberDecipher');
  let handlerSix = null;
  
    handlerSix = function(autoWriteSix) {
    autoWriteSix.preventDefault();
    let offsetNum6 = parseInt(offset6.value);
    textareaTwelve.innerHTML = decipher(textareaEleven.value, offsetNum6);
  }
  offset6.addEventListener('click', handlerSix);

// estamos escribiendo automaticamente con el desplazamiento con boton +

let textareaThirteen = document.querySelector('#box3');
let textareaFourteen = document.querySelector('#box4');
let offset7 =  document.querySelector('#numberDecipher');
let handlerSeven = null;

  handlerSeven = function(autoWriteSeven) {
  autoWriteSeven.preventDefault();
  let offsetNum7 = parseInt(offset7.value);
  textareaFourteen.innerHTML = decipher(textareaThirteen.value, offsetNum7);
}
document.querySelector('#incrementValueButton2').addEventListener('click', handlerSeven);


// estamos escribiendo automaticamente con el desplazamiento con boton -

let textareaFifteen = document.querySelector('#box3');
let textareaSixteen = document.querySelector('#box4');
let offset8 =  document.querySelector('#numberDecipher');
let handlerEight = null;
  
handlerEight = function(autoWriteEight) {
autoWriteEight.preventDefault();
let offsetNum8 = parseInt(offset8.value);
textareaSixteen.innerHTML = decipher(textareaFifteen.value, offsetNum8);
  }
document.querySelector('#decrementValueButton2').addEventListener('click', handlerEight);



  function clearTextareaCipher() {
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
  }

  function clearTextareaDecipher() {
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
  }


 