let name = "programación" + " no es tan facil.";
let hello = " La" +  " Fucking ";
let fin = " Dedicate a otra cosa. ";
let saludo = "Le doy la bienvenida a ";
let saludo2 = "el infierno."
let todalafrase = saludo + saludo2 + hello + name + fin;
console.log(todalafrase);

function saludar (){
    alert (todalafrase)
}
 
let frase = "  " +  "Javascript " + "es un lenguaje" + " esencial para crear" + " Sitios de Web poderosos.";
let completa = "El diablo" + " primero creo el infierno" + " y despues" + " creo los lenguajes de programación";
function lafrase(){
    alert(frase + completa)
}

let space = "_________   ____________________";
let spacex = space;
document.write(spacex);

let numeroString1 = "Soy el 10. ";
let numeroString2 = "Soy 2 veces 10" + " = 20. ";
let numeroString3 = "Soy 3 veces 10" + " = 30. ";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);
function concatenar (){
    alert(concatenaNumeros)
}

function masc(){let edad;
    edad = prompt("Introduce tu edad");
    if (edad >= 18){
    alert("Puedes entrar, eres mayor de edad.");
    } else {
    alert("No puedes entrar, eres menor de edad.");
    }
}

function fem(){let edad;
    edad = prompt("Introduce tu edad");
    if (edad >= 20){
    alert("Puedes entrar, eres mayor de edad.");
    } else {
    alert("No puedes entrar, eres menor de edad.");
    }
}

//let sexo ; sexo = prompt("introduce 1 si eres Hombre, 2 si eres Mujer o 0 si eres otro"); if (sexo == 1 ) {alert ("hombre");} else if (sexo ==2) {alert("mujer");} else {alert("Otro");}

//let num; alert(prompt("indique la cantidad de vueltas")); console.log(num); for (num;   document.write(i `hola mundo<br>`);
  //  }

  //for(i=0;i<=4;i++){
   // document.write("El número es: " + i + "<br>");
   // }

    for(i=20;i<=70;i++){
      document.write("El número es: " + i + "<br>");
     }

     
  var contador = 1   
var numero = parseInt( prompt("Ingrese cantidad: "));
for (let i = 0; i < numero; i++) {
       document.write(contador++ + " " +'Hola mundo ' + "<br>");}
     
//let edadm;
//edadm = prompt("si eres mujer Introduce tu edad");
//if (edadm >= 20){
 //alert("Puedes entrar, eres mayor de edad.");
//} else {
 //alert("No puedes entrar, eres menor de edad.");
//}

//let edadind;
//edadind= prompt("si eres otro Introduce tu edad");
//if (edadind >= 19){
 //alert("Puedes entrar, eres mayor de edad.");
//} else {
 //alert("No puedes entrar, eres menor de edad.");
//}

function monday(){
    alert("Hoy es lunes. Te toca rutina aerobica + cardio")
}
function tuesday(){
    alert("Hoy es martes. Animo, hoy toca pecho y espalda");
}
function wensday(){
    alert("Hoy es miércoles. Estas listo? hoy toca aerobico + piernas");
}

function thursday(){
   alert("Hoy es jueves. Ponte la malla y vamos a nadar un rato");
}
function friday(){
    alert("Hoy es viernes. Y tu cuerpo lo sabe: rutina completa: nado, correr y bici");
}
function saturday(){
    alert("Hoy es sábado. Hoy tranqui, solo cardio");
}
function sunday(){
    alert("Hoy es domingo. Rutina desintoxicante: caminata + escaladora");
}


let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
case "lunes":
alert("Hoy es lunes. Te toca rutina aerobica + cardio");
 break;
case "martes":
alert("Hoy es martes. Animo, hoy toca pecho y espalda");
 break;
case "miércoles":
alert("Hoy es miércoles. Estas listo? hoy toca aerobico + piernas"); //podria poner un boolean
break;
case "jueves":
alert("Hoy es jueves. Ponte la malla y vamos a nadar un rato");
 break;
 case "viernes":
alert("Hoy es viernes. Y tu cuerpo lo sabe: rutina completa: nado, correr y bici");
break;
case "sábado":
alert("Hoy es sábado. Hoy tranqui, solo cardio");
 break;
case "domingo":
alert("Hoy es domingo. Rutina desintoxicante: caminata + escaladora");
break;
default:
alert("Escribe el día de la semana en minúsculas.");
}
