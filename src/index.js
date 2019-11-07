



//función para encriptar

function encripta(){

  let offset= parseInt(document.getElementById("displace").value);
  let string = document.getElementById("keyone").value;
  let nuevaContrasena = window.cipher.encode(offset,string);

  //el window.cipher.encode(offset,string) me envia las variables offset y string al cipher.js

  document.getElementById("keytwo").value=nuevaContrasena;
//console.log(nuevaContrasena);
}
document.getElementById("enviar").addEventListener("click",encripta);
//posibilidad de ir dentro del corchete




function desencripta(){

  let offset= parseInt(document.getElementById("displace").value);
  let string= document.getElementById("keythree").value;
  let nuevaContrasena2 = window.cipher.decode(offset,string);

  document.getElementById("keyfour").value=nuevaContrasena2;

}
document.getElementById("enviar2").addEventListener("click",desencripta);




let letra2 = "C";
let num2 = 2;
let reemplaza="";

function revertir (){

  for( i =0; i<letra2.length; i++) {

   reemplaza= reemplaza + (String.fromCharCode((letra2.charCodeAt(i)- 65 - num2)%26 + 65));

}
console.log(reemplaza);
}





//prueba 1 basica encriptado con letras
//let letra = "ABC";
//let num= 2;
//let desplaza="";

//function convertir(){

//for( i = 0; i < letra.length; i++) {
//desplaza= desplaza + (String.fromCharCode((letra.charCodeAt(i)- 65 + num)%26 + 65));
//}
//console.log(desplaza);
//}

//prueba desencriptar en letras
//let letra2 = "C";
//let num2 = 2;
//let reemplaza="";

//function revertir (){

  //for( i =0; i<letra2.length; i++) {

   //reemplaza= reemplaza + (String.fromCharCode((letra2.charCodeAt(i)- 65 - num2)%26 + 65));

//}
//console.log(reemplaza);
//}
