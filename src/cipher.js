window.cipher = {
  // Acá escribe tu código//
 encode: (offset,string) => {

 let resultado="";

    for(i = 0; i < string.length; i++) {
      //resultado= resultado + (String.fromCharCode((string.charCodeAt(i)-65 + offset)%26 + 65));
      let enAscii=string.charCodeAt(i)
      if(enAscii>= 65 && enAscii <= 90){
        resultado= resultado + (String.fromCharCode((enAscii)-65 + offset)%26 + 65));
      } else if(>65){
        alert("Recuerda, sólo Mayusculas")

      } else {
          alert("Recuerda, sólo Mayusculas")
        }
          }
    console.log(resultado);
  }






   };
