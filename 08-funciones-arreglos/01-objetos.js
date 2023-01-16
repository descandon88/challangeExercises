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
function FunConstructorObject(nombre, apellido, edad){
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

let persona1 =  new FunConstructorObject('David', 'Aguirre',17);

// console.log(persona1);
persona1.esMayorEdad();


// ○ Crear un array que contenga varios objetos persona
const variasPersonas = [
    {
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat:14.3232,
        lng:34.923321
        }
    },
    {
    nombre: 'Peter',
    apellido: 'Parquer',
    edad:17,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat:14.3232,
        lng:34.923321
        }
    },
    {
    nombre: 'Bruce',
    apellido: 'Baner',
    edad:52,
    direccion: {
        ciudad: 'Boston',
        zip: 55321321,
        lat:14.3232,
        lng:34.923321
        }
    }
];
// ○ Crear una función que reciba el array y devuelva la edad promedio
// del grupo de personas
const EdadPromedio=(objeto)=>{
    let sum = 0;
    let promedio = 0;
    const sumEdad = [...objeto].map((obj)=>{    
        return sum+=obj.edad;
   
       
    }); 
    console.log(sumEdad);
    promedio = Math.max(...sumEdad)/sumEdad.length;
    console.log(promedio);
    return promedio;
};

EdadPromedio(variasPersonas);
