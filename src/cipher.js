window.cipher = {
  // Acá escribe tu código//
 encode: (offset,string) => {

 let resultado=[];

    for(i = 0; i < string.length; i++) {
      //resultado= resultado + (String.fromCharCode((string.charCodeAt(i)-65 + offset)%26 + 65));
      let enAscii=string.charCodeAt(i);
      if(enAscii>= 65 && enAscii <= 90){
        resultado.push(String.fromCharCode((enAscii -65 + offset)%26 + 65));
        }
          }
    return resultado.join("");
  },


  decode: (offset,string) => {
  console.log(offset,string);
  let resultado2="";

    for(i =0; i < string.length; i++) {
      let enAscii=string.charCodeAt(i);
      if(enAscii>= 65 && enAscii <= 90){
      resultado2= resultado2 + (String.fromCharCode((enAscii+65 - offset)%26 + 65));
    //  resultado2= resultado2 + (String.fromCharCode((string.charCodeAt(i)+90 - offset)%26 + 0));
    }
    }
console.log(resultado2);
 return resultado2;
}

   };
