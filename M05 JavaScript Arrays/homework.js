/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var garage = ["Koeniggsegg", "Bugatti", "Pagani"];
   garage.length;
   console.log(garage[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var garage = ["Koeniggsegg", "Bugatti", "Pagani"];
   garage.length;
   console.log(garage[2]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:

   var garage = ["Koeniggsegg", "Bugatti", "Pagani"];
   console.log(garage.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   var array1 = [1, 2, 4, 5, 7];

   for (var i = 0; i < array1.length; i++) {
      array1.push(array1[i] + 1);
   }
   console.log(array1);

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   var array1 = [" koeniggsegg ", " bugatti ", " pagani "];
   var elemento = [" porsche "];
   array1.push(elemento);
   console.log(array1);

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var array1 = [" koeniggsegg ", " bugatti ", " pagani "];
   var elemento = [" porsche "];
   array1.unshift(elemento);
   console.log(array1);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   var palabras = ["Hello", "World!"]
   console.log(palabras.join(' '));
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var elemento = [8];

   for (var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         console.log(true)
      }
      console.log(false);
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   var acc = 0;

   for (var i = 0; i < numeros.length; i++) {
      acc = acc + numeros[i];
   }
   console.log(acc);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var resultadosTest = [4, 6, 9, 4];
   var acc = 0;

   for (var i = 0; i < resultadosTest.length; i++) {
      acc = acc + resultadosTest[i];
      console.log(acc / resultadosTest.length);
   }

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   var arrayOfNums = [1, 2, 3, 4, 5];

   var bloque = 0;
   for (var i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > bloque) {
         bloque = arrayOfNums[i];
      }
   }
   return bloque;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   var acc = 1;
   var array = [3, 4, 8];

   if (arguments.length === 0) {
      console.log(0)
   }
   else if (arguments.length === 1) {
      console.log(arguments[0])
   } else {
      for (var i = 0; i < arguments.length; i++) {
         acc = acc * arguments[i]
      }
   }
   return acc;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var acc = 0;
   var arreglo = [3, 6, 9, 12];

   for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > 18) {
         acc += 1
      }
   }
   return acc;

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if (numeroDeDia === 1 || numeroDeDia === 7) {
      console.log(" Es fin de semana ");
   } else if (numeroDeDia > 1 && numeroDeDia < 7) {
      console.log(" Es dia Laboral");
   } else {
      console.log("Selecciona in dia de la semana");
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   var numeroString = n.toString();

   if (numeroString[0] == 9) {
      console.log(true);
   } else {
      console.log(false);
   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   var numeroString = n.toString();

   if (numeroString[0] == 9) {
      console.log(true);
   } else {
      console.log(false);
   } arreglo = [5, 5, 5];

   for (var i = 0; i < arreglo.length - 1; i++) {
      if (arreglo[i] !== arreglo[i + 1]) {
         return (false);
      }
      return true;
   }

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var array = ["enero"];
   var array1 = ["marzo", "febrero", "enero", "diciembre", "junio", "agosto", "julio", "noviembre", "septiembre"]

   for (var i = 0; i < array.length; i++) {
      if (array[i] === "enero" || array[i] === "marzo" || array[i] === "noviembre") {
         array1.push(array[i])
      }
      if (array1.length === 3) {
         return array1;
      } else {
         return "no se encontro el mes digitado";

      }

      function tablaDelSeis() {
         // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
         // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
         // Tu código:

         var tablaDelSeis = [6];

         for (var i = 0; i < 11; i++) {
            if (tablaDelSeis * i) {
               return tablaDelSeis * i;
            }
         }
      }

      function mayorACien(array) {
         // La función recibe un arreglo con enteros entre 0 y 200.
         // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
         // Tu código:

         var array1 = [3, 6, 9, 21, 68, 136, 167];

         for (var i = 0; i < array1.length; i++) {
            if (array[i] > 100) {
               array2.push(array[i])
            }
         }
         return array2;
      }

      /* ----------------------------------------------------------------------------------
      💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
      -------------------------------------------------------------------------------------*/

      function breakStatement(num) {
         // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
         // Guardar cada nuevo valor en un arreglo y retornarlo.
         // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
         // la ejecución y retornar el string: "Se interrumpió la ejecución".
         // [PISTA]: utiliza el statement 'break'.
         // Tu código:

         var array1 = [];
         var suma = num
         for (var i = 0; i < 10; i++) {
            suma = suma + 2;
            if (suma === i) {
               break;
            } else {
               array1.push(suma)
            }
         }
         if (array1.lenght < 10) {
            return "Se interrumpió la ejecucion";

         } else if (array1.length === 10) {
            return array1;
         }
      }

      function continueStatement(num) {
         // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
         // Guardar cada nuevo valor en un array y retornarlo.
         // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
         // se continua con la siguiente iteración.
         // [PISTA]: utiliza el statement 'continue'.
         // Tu código:
      }

      /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
      module.exports = {
         devolverPrimerElemento,
         devolverUltimoElemento,
         obtenerLargoDelArray,
         incrementarPorUno,
         agregarItemAlFinalDelArray,
         agregarItemAlComienzoDelArray,
         dePalabrasAFrase,
         arrayContiene,
         agregarNumeros,
         promedioResultadosTest,
         numeroMasGrande,
         multiplicarArgumentos,
         cuentoElementos,
         diaDeLaSemana,
         empiezaConNueve,
         todosIguales,
         mesesDelAño,
         tablaDelSeis,
         mayorACien,
         breakStatement,
         continueStatement,
      }
