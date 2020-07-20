  const limite_inferior = "A".charCodeAt();
  const limite_superior = "Z".charCodeAt();

const cipher = (texto_para_cifrar) => {

  let desplazamiento = 4;
  const largo = texto_para_cifrar.length;
  
  let resultado = "";
  //vamos a dar una vuelta por cada letra a decifrar
	for (let i=0; i < largo; i = i + 1) {
    let letra_a_cifrar = texto_para_cifrar[i].toUpperCase()
    let ascii = letra_a_cifrar.charCodeAt();
    if ( (ascii+desplazamiento) > limite_superior) {
        let exceso =  (ascii+desplazamiento) - limite_superior;
        let posicion = exceso -1;
        resultado +=  String.fromCharCode(limite_inferior+posicion);
      } else {
      resultado +=  String.fromCharCode(ascii+desplazamiento);
    }
  }
  return resultado;
}

export default cipher;


// const cipher = {
//   // ...
// };

// export default cipher;