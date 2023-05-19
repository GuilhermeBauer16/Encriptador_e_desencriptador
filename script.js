const textArea = document.querySelector(".texto");
const mensagem = document.querySelector('.mensagem');
const btnCopiar = document.querySelector(".btn-copiar")


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";



}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0 ; i < matrizCodigo.length; i++){

        if (stringEncriptada.includes(matrizCodigo[i][0])){

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            mensagem.style.backgroundImage = "none";

        }

    }

    return stringEncriptada;
}


function btnDescriptar(){
    const textoDescriptado = descriptar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = "";

}


function descriptar(stringDesencriptada){

    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (i = 0 ; i < matrizCodigo.length ; i++){

        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            mensagem.style.backgroundImage = "none";
        }
    }

    return stringDesencriptada;


}

function copia(){
    textArea.value = mensagem.value
    mensagem.value = ""
    var nomeOriginal = btnCopiar.innerHTML;

    btnCopiar.innerHTML = "Copiado";

    setTimeout(function() {
      btnCopiar.innerHTML = nomeOriginal;
    }, 2000);  



}



