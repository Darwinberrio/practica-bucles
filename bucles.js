//  Ejercicio 1: Suma del 1 al 100
// Escribe un programa en JavaScript que calcule la suma de todos los números enteros del 1 al 100. El resultado debe imprimirse en la consola.

suma=0;
for (let i = 1; i <= 100; i++) {
    suma=suma+i;
}
console.log(suma);

// Ejercicio 2: Números pares del 1 al 50
// Escribe un programa que imprima en consola todos los números pares comprendidos entre 1 y 50 (inclusive). Recuerda que un número es par si el resto de dividirlo por 2 es 0.

sumapar=0;
for (let i = 1; i <= 50; i++) {
        i % 2 == 0;
    sumapar=sumapar+i;
}
console.log(sumapar);


// Ejercicio 3: Tabla de multiplicar
// Pide al usuario un número mediante prompt(). Luego, imprime su tabla de multiplicar del 1 al 10. Ejemplo de salida si el usuario ingresa 5:

let numero = prompt("introduce numero ")

multi=1;
for (let i = 1; i <= 10; i++) {
    multi=multi * numero;
    console.log(numero+"*" +i+"*"+multi);
}
// 5 x 1 = 5  
// 5 x 2 = 10  
// ...  
// 5 x 10 = 50

// Ejercicio 4: Cuenta regresiva
// Escribe un programa que imprima una cuenta regresiva desde 10 hasta 1. Cada número debe mostrarse en una línea diferente en la consola.

for (let i = 10; i >=1; i--) {
    console.log(i);
}

// Ejercicio 5: Factorial de un número
// Pide al usuario un número mediante prompt() y calcula su factorial. El factorial de un número entero positivo n (n!) es el producto de todos los enteros positivos desde 1 hasta n.
// Ejemplo:

// 5! = 5 x 4 x 3 x 2 x 1 = 120

let nro = parseInt(prompt("Introduce un número para calcular su factorial:"));

  let resultado = 1;
  let cadena = "";

  for (let i = 1; i <= nro; i++) {
    resultado *= i;
    cadena += i;
    if (i < nro) {
      cadena += " x ";
    }
  }
  cadena =nro+"! ="+cadena+" = " + resultado;
  console.log(cadena);
