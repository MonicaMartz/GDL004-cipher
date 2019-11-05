
//let offset = document.getElementById("displace").value;//

//let newKey = document.getElementById("keyone").value;

//document.getElementById("keytwo").innerHTML //Regresar el valor nueva contraseña al cuadro de texto

let letra = "A";
let num= 2;
let desplaza;

function convertir (){
  desplaza= (letra.charCodeAt(0)- 65 + num)%26 + 65;

console.log(String.fromCharCode(desplaza));
}

document.getElementById("desplaza").innerHTML
