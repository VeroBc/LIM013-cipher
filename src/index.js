import cipher from './cipher.js'
      

  console.log(cipher("VERONICA"));

  document.querySelector('#getCipherButton').addEventListener('click', getCipher);

  document.querySelector('#getDecipherButton').addEventListener('click', getDecipher);

  document.querySelector('#endCipherButton').addEventListener('click', endCipher);

  document.querySelector('#decrementValueButton').addEventListener('click', decrementValueCipher);

  document.querySelector('#incrementValueButton').addEventListener('click', incrementValueCipher);

  document.querySelector('#decrementValueButton2').addEventListener('click', decrementValueDecipher);

  document.querySelector('#incrementValueButton2').addEventListener('click', incrementValueDecipher);

  document.querySelector('#endDecipherButton').addEventListener('click', endDecipher);

  
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

  let value = parseInt(document.getElementById('numbercipher').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('numbercipher').value = value;
  }

  function decrementValueCipher(){

    let value = parseInt(document.getElementById('numbercipher').value, 10);
    if (value < 0){
      value = 0;
    }
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numbercipher').value = value;
  }


  function incrementValueDecipher(){

    let value = parseInt(document.getElementById('numberdecipher').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberdecipher').value = value;
  }

  function decrementValueDecipher(){

    let value = parseInt(document.getElementById('numberdecipher').value, 10);
    if (value < 0){
      value = 0;
    }
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberdecipher').value = value;
  }
  
  
  function endDecipher(){

    let leaveCipher = document.getElementById("decipher");
    leaveCipher.classList.add("hide");

    let displayInicio = document.getElementById("inicio");
    displayInicio.classList.remove("hide"); 
      
  }
  