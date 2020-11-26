//import cipher from './cipher.js';

//console.log(cipher);

document.getElementById("PaginaCifrado").hidden=true

document.getElementById("PaginaDescifrado").hidden=true

  
document.getElementById("single-img1").addEventListener("click",function() {
    document.getElementById("CajasDeFotos").hidden=true;
    document.getElementById("PaginaCifrado").hidden=false;
    
})

document.getElementById("single-img2").addEventListener("click",function() {
    document.getElementById("CajasDeFotos").hidden=true;
    document.getElementById("PaginaDescifrado").hidden=false;
    
})

//.toUpperCase()

function cipher() {
  let inputMensaje = document.getElementById("containerOne").value.toUpperCase()
  console.log(1, inputMensaje)
  let offset = parseInt(document.getElementById("offset").value)
  console.log(2, offset)

let mensaje = ""
for (let i = 0; i < inputMensaje.length; i++) {
     let inputMensajeAscii = inputMensaje.charCodeAt(i);
     let letterNewPosition = (inputMensajeAscii - 65 + offset) % 26 + 65;
     if (inputMensajeAscii === 32) { letterNewPosition = 32; }
     let sinceAscii = String.fromCharCode(letterNewPosition);

     mensaje += sinceAscii;
     //console.log(4, mensaje)

}

//return inputMensaje;
document.getElementById("containerTwo").innerHTML = mensaje


}

//Funcion desifrado

function desifrado(){





} 