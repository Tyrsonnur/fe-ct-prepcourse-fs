/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   var x = 29
   var y = 29

   if (x > y) {
      console.log(x + " " + " Es mayor que " + " " + y)
   } else if (x < y) {
      console.log(y + " Es mayor que " + x);
   } else {
      console.log(x + " y " + y + " son iguales ");
   }
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   var x = 18

   if (x >= 18) {
      console.log("Allowed to enter")
   } else {
      console.log("Not allowed to enter")
   }
}
function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   var x = "Away"

   if (x === 1) {
      console.log(" User is Online ")
   }
   else if (x === 2) {
      console.log(" User is Away ")
   }
   else {
      console.log(" User is Offline ")
   }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   var x = "mandarin"

   if (x === "aleman") {
      console.log(" Guten Tag! ")
   }
   else if (x === "mandarin") {
      console.log(" Ni Hao! ")
   }
   else if (x === "ingles") {
      console.log(" Hello! ")
   } else {
      console.log(" Hola! ")
   }
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   var color = "purple"

   switch (color) {

      case "red":
         console.log(" This is red");
         break;

      case "blue":
         console.log(" This is blue");
         break;

      case "orange":
         console.log(" This is orange");
         break;

      case "green":
         console.log(" This is green");
         break;

      default:
         console.log(" color not found");
         break;
   }
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   var num = 10

   if (num === 5 || num === 10) {
      console.log(true);
   } else {
      console.log(false);
   }
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:

   var num = 51

   if (num > 20 && num < 50) {
      console.log(true);
   } else {
      console.log(false);
   }

}


function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:

   var numero = 90

   if (numero === Math.floor(numero)) {
      console.log(true);
   } else {
      console.log(false);
   }
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   var numero = 5

   if (numero % 3 === 0 && numero % 5 === 0) {
      console.log(" Fizzbuzz ");
   } else if (numero % 3 === 0) {
      console.log(" Fizz ")
   }
   else if (numero % 5 === 0) {
      console.log(" Buzz ");
   } else {
      console.log(numero)
   }
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:

   var num1 = 0
   var num2 = 0
   var num3 = 0

   if (num1 > num2 && num1 > num3 && num1 > 0) {
      console.log(" Numero 1 es mayor y positivo ")
   } else if (num1 < 0 || num2 < 0 || num3 < 0) {
      console.log("Hay negativos");
   } else if (num3 > num1 && num3 > num2) {
      console.log(num3 + 1)
   } else if (num1 === 0 && num2 === 0 && num3 === 0) {
      console.log(" Error ")
   } else {
      console.log(false);
   }
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   var numero = 2

   if (numero === 2) {
      console.log(true)
   }
   else if (numero < 2) {
      console.log(false)
   } for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
         console.log(false)
      }
   }
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   var valor = "Arsenal"

   if (valor === true) {
      console.log(" soy verdadero ")
   } else if (valor === false) {
      console.log(" Soy falso ")
   } else[
      console.log(" por favor ingrese un valor valido ")
   ]
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:

   var numero = ("99")

   if (numero > 99 && numero < 1000) {
      console.log(true)
   }
   else[
      console.log(false)
   ]

}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var num = 3;
   var limite = 8;
   var suma = 0;

   do {
      limite += 5;
      suma -= 1;
   } while (limite !== 0)
   console.log(num + suma);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
