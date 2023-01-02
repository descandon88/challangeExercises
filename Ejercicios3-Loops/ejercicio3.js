// Ejercicio#1
// Mostrar todos los números de 1 a n
// aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

const unoAnenUnoEnUno = (n) => {
  for (let i = 0; i < n; i++) {
    let ene = i + 1;
    console.log(ene);
  }
};
// let nvalue= prompt('Ingrese el valor de n:')
unoAnenUnoEnUno(nvalue);

//Ejercicio#2
// Mostrar todos los números de 1 a N
// aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

const unoAnenDosEnDos = (n) => {
  for (let i = 0; i < n; i++) {
    let ene = i + 2;
    if (ene <= n && ene % 2 == 0) {
      console.log(ene);
    }
  }
};

let nvalue = prompt("Ingrese el valor de n:");
unoAnenDosEnDos(nvalue);

// Ejercicio#3
// Mostrar todos los números de N a 1
// disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

const naUnoenUnoEnUno = (n) => {
  for (let i = n; i > 1; i--) {
    // let ene = i - 1;
    console.log(i);
  }
};

let nvalue = prompt("Ingrese el valor de n:");
naUnoenUnoEnUno(nvalue);

// Ejercicio#4
// Escribir utilizando console.log la
// tabla del 9 hasta 9x10

const tablaDelNueve = (nueve) => {
  for (let i = 1; i <= 10; i++) {
    resultado = i * nueve;
    console.log(i + "x" + nueve + "=" + resultado);
  }
};

tablaDelNueve(9);

// Ejercicio#5
// Pedir al usuario que ingrese un
// número en un prompt, hacer la
// suma de todos los dígitos, validar
// que el número ingresado no
// contenga letras.

const sumTodosDigitos = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + parseInt(num[i]);
  }
  console.log(
    "La suma de los dígitos del numero ingresado " + num + " es " + sum
  );
  // return sum;
};

let numValue = prompt("Ingrese un número:");

sumTodosDigitos(numValue);

// Ejercicio#6
// Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

const sumParesEntreNyM = (n, m) => {
  let sum = 0;
  let num = m - n;
  for (let i = n; i < m; i++) {
    if (i % 2 == 0 && i != n) {
      sum = sum + parseInt(i);
      console.log(
        "Los números pares son: " + i + " entre " + " " + n + " y " + m
      );
    }
  }
  console.log("La suma de los dígitos entre N y M es: " + sum);
};

let nValue = prompt("Ingrese el valor N:");
let mValue = prompt("Ingrese el valor M:");

sumParesEntreNyM(nValue, mValue);

// Ejercicio # 7
// Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.
const sumatoriaNprimeros = (num) => {
  let sum = 0;
  let array = [];
  for (let i = 0; i < num; i++) {
    array[i]=0;
    if (i > 0) {
      array[i] = i;
      sum += array[i];
      console.log("aca van las iteraciones: " + array[i]+' y las suma de los numeros maximo N: '+sum);
    }
  }
  console.log(sum);
};

let nPrimerosValue = prompt("Ingrese el valor N:");
sumatoriaNprimeros(nPrimerosValue);

// Ejercicio # 8
// Realizar el factorial de los primeros
// N números.
