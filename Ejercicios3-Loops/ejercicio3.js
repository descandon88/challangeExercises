// Ejercicio#1
// Mostrar todos los números de 1 a n
// aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.


const unoAnenUnoEnUno =(n)=> {
    for ( let i = 0; i< n; i ++) {
        let ene = i + 1;
        console.log(ene);
    } 
}
// let nvalue= prompt('Ingrese el valor de n:')
unoAnenUnoEnUno (nvalue);

//Ejercicio#2
// Mostrar todos los números de 1 a N
// aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

const unoAnenDosEnDos =(n)=> {
    for ( let i = 0; i< n; i ++) {
        let ene = i + 2;
        if (ene <= n && ene%2==0) { 

            console.log(ene);
        }
    } 
}

let nvalue= prompt('Ingrese el valor de n:')
unoAnenDosEnDos (nvalue);

// Ejercicio#3
// Mostrar todos los números de N a 1
// disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

const naUnoenUnoEnUno =(n)=> {
    for ( let i = n; i> 1; i--) {
        // let ene = i - 1;
        console.log(i);
    } 
};

let nvalue= prompt('Ingrese el valor de n:')
naUnoenUnoEnUno(nvalue);

// Ejercicio#4
// Escribir utilizando console.log la
// tabla del 9 hasta 9x10

const tablaDelNueve =(nueve)=> {
    for(let i=1;i<=10;i++) {
        resultado=i*nueve;
        console.log(i+'x'+nueve+'='+resultado);

    }
};

tablaDelNueve(9);

// Ejercicio#5
// Pedir al usuario que ingrese un
// número en un prompt, hacer la
// suma de todos los dígitos, validar
// que el número ingresado no
// contenga letras.
