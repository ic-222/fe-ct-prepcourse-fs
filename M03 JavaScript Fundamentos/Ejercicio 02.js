/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return "Henry";
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var sumar =(x+y);
   return sumar
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var restar =(x-y);
   return restar
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var div =(x/y);
   return div
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var mult =(x*y);
   return mult
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var resto=(x%y);
   return resto
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
