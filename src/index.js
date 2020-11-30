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




function cipher() {
  //Declaro la var del lenguaje que entra, llamo al valor y lo paso a mayusculas
  let inputMensaje = document.getElementById("containerOne").value.toUpperCase()
  console.log(1, inputMensaje)
  //Convierto el desplazamiento a numero entero  
  let offset = parseInt(document.getElementById("offset").value)
  console.log(2, offset)

  //Declaro la variable para el mensaje que se cifrará
  let mensaje = ""
  // Inicio del ciclo, declaro e inicializo la var i, que será menor al largo del mensaje, incrementa un valor 
for (let i = 0; i < inputMensaje.length; i++) {
  //Pasamos el valor al código ascii
     let inputMensajeAscii = inputMensaje.charCodeAt(i);
  //Aplicamos la formula de michelle para  obtener la nueva posición de la letra   
     let letterNewPosition = (inputMensajeAscii - 65 + offset) % 26 + 65;
  //Si el valor es estrictamente igual a 32 (espacio ASCII) le digo a la var que mantenga el mismo valor   
     if (inputMensajeAscii === 32) { letterNewPosition = 32; }
  //Convierto en ASCII a la nueva posición  
     let sinceAscii = String.fromCharCode(letterNewPosition);
  //Concateno las var
     mensaje += sinceAscii;
     //console.log(4, mensaje)

}

//Imprimo el mensaje en el container 2
document.getElementById("containerTwo").innerHTML = mensaje


}


document.getElementById("comeButton").addEventListener("click",function (){
  document.getElementById("PaginaCifrado").hidden=true;
  document.getElementById("CajasDeFotos").hidden=false;


}) 
//Funcion desifrado

function desifrado() {
  let mensajeCifrado = document.getElementById("boxOne").value.toUpperCase()
  let offset = parseInt(document.getElementById("offset2").value);
  console.log(offset2)
   





} 