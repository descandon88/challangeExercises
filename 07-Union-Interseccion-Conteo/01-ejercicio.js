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

// ● El usuario ingresa dos conjuntos de números separados por coma, el
// programa debe determinar si ambos conjuntos tienen la misma cantidad de
// números.

// ● El usuario ingresa dos conjuntos de números separados por coma, si ambos
// conjuntos tienen la misma cantidad de elementos mostrar un arreglo que
// contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])