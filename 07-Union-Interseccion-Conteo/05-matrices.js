// Recorrer un arreglo de arreglos para mostrarlo como una matriz,
// ejemplo [[1,1],[2,2]] se mostraría de la siguiente forma:
// 1 1
// 2 2
const arregloEnMatriz =(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
                       
        }
        console.log(arr[i],'\n'); 
    }
}
let arr1 = [[1,3],[6,5]];
arregloEnMatriz(arr1)

// ● Sumar [[1,1],[2,2]] con [[3,1],[3,2]].
const sumar=(arrA,arrB)=>{
    let arrInnerA =[];
    let arrInnerB =[];
    let matrixInner=[];
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrA[i].length; j++) {
            if(i===0){ 
                arrInnerA.push(arrA[i][j]+arrB[i][j]);

            }
            else {
                arrInnerB.push(arrA[i][j]+arrB[i][j]);

            }
            // console.log(arrInner);   
        }
    }
    matrixInner = [arrInnerA,arrInnerB];

    return matrixInner
};
let arr2 =[[1,1],[2,2]];
let arr3 = [[3,1],[3,2]];
// arr3 = [...arr2];

console.log(sumar(arr2,arr3));
// ● Contar la cantidad de elementos dentro de una matriz.

// ● Multiplicar una matriz por un escalar, si la matriz inicial es
// [[1,2,3],[4,5,6]], al multiplicarla por dos deberíamos obtener
// [[2,4,6],[8,10,12]].
// ● Encontrar el número mayor en una matriz.
// ● Determinar si un determinado número se encuentra dentro de una
// matriz o no.
// ● Devolver la suma de todos los elementos en la diagonal de la matriz.