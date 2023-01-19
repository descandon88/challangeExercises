// Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la
// intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]
    let array01 = ['hola','soy','David','como','Goku']
    let array02 = ['hola','soy','Samuel','Guadalupe','Goku']
const FunctionIntersection = (array1,array2) => {
    let intersection = array1.filter(x => array2.includes(x));
    console.log(intersection);
}

FunctionIntersection(array01,array02);

// ● Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la
// unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]
let arrayA = ['hola','soy','David','como','Goku']
let arrayB = ['hola','soy','Samuel','Guadalupe','Goku']
const FunctionUnion = (array1,array2) => {
    let union = [...new Set([...array1, ...array2])];
    console.log(union);
}

FunctionUnion(arrayA,arrayB);

// ● El usuario ingresa dos conjuntos de números separados por coma, el
// programa debe determinar si ambos conjuntos tienen la misma cantidad de
// números.
let ArrayNumA = [52,58,21,45,65]
let ArrayNumB = [32,12,35,45,78]
const FunctionMismaCantidad = (array1,array2) => {
    if (array1.length !== array2.length) {
        console.log('No tienen la misma cantidad de numeros')
    }
    else {console.log('tienen la misma cantidad')}    
}

FunctionMismaCantidad(ArrayNumA,ArrayNumB);
// ● El usuario ingresa dos conjuntos de números separados por coma, si ambos
// conjuntos tienen la misma cantidad de elementos mostrar un arreglo que
// contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])

let ArryNumA = [5,25,45,21,15]
let ArryNumB = [6,35,55,32,12]

const FunctionMismaCantidadElementos = (array1,array2) => {
    let arreglo = [];
    if (array1.length == array2.length) {
        for (let index = 0; index < array1.length; index++) {
            arreglo.push(array1[index]+array2[index]);     
        }
     
        console.log('['+array1+']'+ ' + ' +'[' + array2 +']'+ ' = ' + '['+arreglo+']');
    }
    else {console.log('no tienen la misma cantidad')}    
}

FunctionMismaCantidadElementos(ArryNumA,ArryNumB);