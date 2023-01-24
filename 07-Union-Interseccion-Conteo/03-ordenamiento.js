// Crear un método que permite intercambiar las posiciones de
// dos elementos de un arreglo en base a sus índices ej:
//  arr = [1,2,3]
//  swap(arr, 0, 1)
// ● console.log(arr) // [2,1,3]
let arr1 = [1,2,4];

const cambiarPosicion = (arr,p1,p2)=> {
    let innerValue= arr[p1];
    // innerArray[p1]=arr[p2];
    
    arr[p1]=arr[p2];
    arr[p2]= innerValue;

    // console.log(arr);
    return arr;
};

cambiarPosicion(arr1,0,1);
console.log(arr1);


// Realizar el mismo ejercicio anterior pero que en esta ocasión
// devuelva un arreglo nuevo con los datos cambiados.
// arr = [1,2,3]
//  new_arr = swap(arr, 0, 1)
//  console.log(arr) // [1,2,3]
// ● console.log(new_arr) // [2,1,3]
let arr2 = [1,2,4];
const changePosNewArray = (arr,p1,p2)=> {
    let currentArray=[...arr];
    let newArray=[...arr];
    [newArray[p1], newArray[p2]] = [currentArray[p2], currentArray[p1]];
    return newArray;
};

let new_Array=changePosNewArray(arr2,0,1);
console.log('Arreglo anterior: '+ arr2);
console.log(new_Array);

// Crear una función que reciba un arreglo y que cree uno nuevo con todos los
// elementos ordenados de menor a mayor, (sin ocupar el método .sort)
let arr3 = [1,3,2,17,27];
const menorAmayor = (arr)=>{
    let newArray=[...arr];
    for (let index = 1; index < arr.length; index++) {
       if(arr[index-1]<arr[index]){ 
        newArray.push(arr[index]);
     } else {
        newArray.push('');
     }
       
        
    }
   return newArray;
};

let creciente = menorAmayor(arr3);
console.log(creciente);

// Crear una función que reciba un arreglo y que cree uno nuevo con todos los
// elementos ordenados de mayor a menor.
let arr4 = [1,2,4,4,5,3,2,3,5,6,10,12];
const mayorAmenor = (arr) =>{
    let newArray=[...arr];

};
let decreciente = mayorAmenor(arr4);
console.log(decreciente);
