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
            // break;
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
// Test de la función
let Arreglo = [23,3,21];
devolverPromedioArreglo(Arreglo);


// ● Crear una función que calcule el promedio dentro de un arreglo pero
// dentro de un rango, esta función recibe el arreglo, un punto de
// partida y uno de termino y devuelve el promedio de los valores dentro
// del rango especificado

const promedioArregloDentroRango = (max,min,array)=> {
    let promedio = 0;
    let arrayInt = 0;
    let count=0
    for (let index = 0; index < array.length; index++) {
        if(array[index]>=min && array[index]<=max){
            arrayInt+=array[index];
            count+=1;
            console.log('Valor del posicion del array es '+array[index]+' con index '+index);
        }
        
    }
    promedio = arrayInt / count;
    console.log('El promedio de los valores del arraglo dentro del rango ingresado es: '+ promedio);
};
let arreglo = [10,12,13,14,20,31,35,40,42,52,56,59];

promedioArregloDentroRango(40,20,arreglo)
