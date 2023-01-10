// ● Crear una función que reciba un arreglo como parámetro y devuelva
// una copia del arreglo.

// ● Crear una función que devuelva el promedio de un arreglo, en caso de
// que el arreglo esté vacío debe devolver cero.
const devolverPromedioArreglo=(arreglo)=> {
    let promedio = 0;
    let arrayInt = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo.length !==0) {
            arrayInt+=arreglo[index];  
        } else {
            arrayInt=0;
            
            break;
        }
    
    }
    if (arrayInt!==0){ 
        promedio = arrayInt/arreglo.length;
        console.log(promedio);
    }
    else {
        console.log('Arreglo vacio');
    }
  
};
Arreglo = [23,3,21];
devolverPromedioArreglo(Arreglo);


// ● Crear una función que calcule el promedio dentro de un arreglo pero
// dentro de un rango, esta función recibe el arreglo, un punto de
// partida y uno de termino y devuelve el promedio de los valores dentro
// del rango especificado