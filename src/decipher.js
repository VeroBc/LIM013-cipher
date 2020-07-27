const limite_inferior = "A".charCodeAt();
const limite_superior = "Z".charCodeAt();

  
const decipher = (texto_para_decifrar, offset) => {
 
  let desplazamiento = offset;
 
  const largo = texto_para_decifrar.length;
  
  let resultado = "";
  //vamos a dar una vuelta por cada letra a decifrar
	for (let i=0; i < largo; i = i + 1) {
    let letra_a_decifrar = texto_para_decifrar[i].toUpperCase()
    let ascii = letra_a_decifrar.charCodeAt();
    if ( (ascii-desplazamiento) < limite_inferior ) {
        let posicion =  limite_inferior - (ascii - desplazamiento);
        let exceso = posicion - 1;
        resultado +=  String.fromCharCode(limite_superior - exceso);
      } else {
      resultado +=  String.fromCharCode(ascii - desplazamiento);
    }
  }
  return resultado;
 
  }

  export default decipher;