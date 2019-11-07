



window.cipher.encode(offset,newKey);

function encripta(){
  let offset= parseInt(document.getElementById("displace").value);
  let string = document.getElementById("keyone").value;
  let nuevaContrasena = cipher.encode(offset,string);

  document.getElementById("keytwo").innerHTML=nuevaContrasena;

}
document.getElementById("enviar").addEventListener("click",nuevaContrasena);
//posibilidad de ir dentro del corchete


//
//let newKey;
//let offset;
//let resultado="";
//declaré las variables arriba y las mandé a llamar con un
//valor dentro de la funcion pues de lo contrario no reconocia a las variables
//ahora haré la prueba desde el doc cipher.js
//function convert (){
//newKey = document.getElementById("keyone").value;
//offset = parseInt(document.getElementById("displace").value);

window.cipher.encode(offset,newKey);


  for(i = 0; i < newKey.length; i++) {

    resultado= resultado + (String.fromCharCode((newKey.charCodeAt(i)-65 + offset)%26 + 65));
  }
  console.log(resultado);
  }



  //document.getElementById("keytwo").innerHTML //Regresar el valor nueva contraseña al cuadro de texto
//prueba 1 basica con letras
let letra = "ABC";
let num= 2;
let desplaza="";

function convertir (){

for( i = 0; i < letra.length; i++) {
desplaza= desplaza + (String.fromCharCode((letra.charCodeAt(i)- 65 + num)%26 + 65));
}
console.log(desplaza);
}

prueba en letras
let letra2 = "C";
let num2 = 2;
let reemplaza="";

function revertir (){

  for( i =0; i<letra2.length; i++) {

   reemplaza= reemplaza + (String.fromCharCode((letra2.charCodeAt(i)- 65 - num2)%26 + 65));

}
console.log(reemplaza);
}
