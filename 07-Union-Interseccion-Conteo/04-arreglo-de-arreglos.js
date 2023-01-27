// Crear una función que permite aplanar un arreglo dado,
// Ejemplo:
// var arr = [[1,2,3],[4,5,6],[7,8,9]];
// ●console.log(aplanar(arr)); // [1,2,3,4,5,6,7,8,9]
const aplanar=(arr)=>{
    let arrIn = [];
    let arrInner = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);

        for (let j = 0; j < arr[i].length; j++) {
            arrIn.push(arr[i][j]);
        }
    }
    console.log(arrIn);

    return arrIn;
}
let arr1 = [[1,2,3],[4,5,6],[7,8,9]];
aplanar(arr1);
// console.log(aplanar(arr1));


// Crear una función que divida un arreglo en dos partes con la
// misma cantidad de elementos (o una diferencia de máximo un
// elemento) y devuelva un arreglo que contenga al grupo1 y al
// grupo2
//  var arr = [1,2,3,4,5,6,7,8];
// ● console.log(split(arr)); // [[1,2,3,4], [5,6,7,8]]

const split = (arr) => {
    let arrayIn = [];
    let arrA = [];
    let arrB =[];
    let mitad = parseInt(arr.length / 2);
    // for (let i = 0; i < 2; i++) {
        for (let j = 0; j < arr.length; j++) 
        {
            if (j < mitad) {
                arrA.push(arr[j]);
            }
            else 
            {
                arrB.push(arr[j]);
            }                
        }
    // }
   

    arrayIn = [arrA,arrB];
    // console.log(arrayIn);
    return arrayIn
}

let arr2 = [1,2,3,4,5,6,53,54,12,43,9,10];
console.log(split(arr2));
