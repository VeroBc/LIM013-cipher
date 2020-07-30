const limite_inferior = "A".charCodeAt();
const limite_superior = "Z".charCodeAt();
const rango = limite_superior - limite_inferior + 1;
  
const cipher = {

    encode: (texto_para_cifrar, offset) => {
        
        if (!texto_para_cifrar || !offset) 
            throw new TypeError('Los argumentos de la función son incorrectos');

        const desplazamiento = offset % rango;
        const largo = texto_para_cifrar.length;
        let resultado = "";

        //vamos a dar una vuelta por cada letra a cifrar
        for (let i=0; i < largo; i++) {
           
            let letra_a_cifrar = texto_para_cifrar[i].toUpperCase()
            
            let ascii = letra_a_cifrar.charCodeAt();
            
            if (letra_a_cifrar == " ") {
                resultado += " ";
                continue;
            }

            if ( (ascii + desplazamiento) > limite_superior) {
                let exceso =  (ascii + desplazamiento) - limite_superior;
                let posicion = exceso -1;
                resultado +=  String.fromCharCode(limite_inferior+posicion);
            } else {
                resultado +=  String.fromCharCode(ascii+desplazamiento);
            }
        }
        return resultado;
    },  

    decode: (texto_para_descifrar, offset) => {

        if (!texto_para_descifrar || !offset) 
            throw new TypeError('Los argumentos de la función son incorrectos');

        const desplazamiento = offset % rango;         
        const largo = texto_para_descifrar.length;
        let resultado = "";

        //vamos a dar una vuelta por cada letra a descifrar
        for (let i=0; i < largo; i++) {

            let letra_a_descifrar = texto_para_descifrar[i].toUpperCase()
          
            let ascii = letra_a_descifrar.charCodeAt();

            if (letra_a_descifrar == " ") {
                resultado += " ";
                continue;
            }

            if ((ascii - desplazamiento) < limite_inferior) {
                let posicion =  limite_inferior - (ascii - desplazamiento);
                let exceso = posicion - 1;
                resultado +=  String.fromCharCode(limite_superior - exceso);
            } else {
                resultado +=  String.fromCharCode(ascii - desplazamiento);
            }
        }
        return resultado;
    }
};

export default cipher;