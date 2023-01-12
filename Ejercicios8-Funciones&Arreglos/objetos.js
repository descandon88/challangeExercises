// Crear un objeto literal persona con nombre y edad y una método
// que determine si es mayor de edad o no.

personas = [
    {
        nombre: 'Sebastián',
        edad: '32',
    },
    {
        nombre: 'Rodrigo',
        edad: '17',
    },
    {
        nombre: 'Verónica',
        edad: '36',
    },
    {
        nombre: 'Belén',
        edad: '29',
    },
    {
        nombre: 'Guadalupe',
        edad: '15',
    },

];
function mayorDeEdad (obj) {
    if (obj.edad>='18'){
        return true;
    }
}

const esMayor = (obj)=>{
    result = [];
    result=obj.filter((objeto) =>(objeto.edad >='18' ))
    console.log(result);
}

esMayor(personas);

// ○ Crear una función constructora que permita crear objetos del tipo
// personas pasándole solo un nombre y edad, agregar el método.
function funConstructorObject(nombre, apellido, edad){
    this.nombre_completo={
        'nombre': nombre,
        'apellido': apellido
    }
    // this.nombre=nombre;
    // this.apellido=apellido;
    this.edad = edad;
    this.esMayorEdad = function () {
        if(edad>=18){console.log('es mayor de edad');}
        else {console.log('Es menor de edad');}
    }
}

let persona1 =  new funConstructorObject('David', 'Aguirre',17);

// console.log(persona1);
persona1.esMayorEdad();


// ○ Crear un array que contenga varios objetos persona

// ○ Crear una función que reciba el array y devuelva la edad promedio
// del grupo de personas

// Teléfono
// ○ Crear una función constructora que devuelva objetos del tipo
// teléfono, como argumento debe recibir un número de teléfono, el
// objeto creado tiene el número de llamadas que debe ser
// inicializado en cero y un método llamar que debe aumentar el
// número de llamados en uno.


// ● Puntos y líneas
// ○ Crear la función constructura punto que recibe un par de
// coordenadas (x,y) y devuelve un objeto punto en esa posición.
// ○ Crear la función constructora recta que recibe como argumento
// 2 puntos.