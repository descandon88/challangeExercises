// Linear Search Algorithm
// Linear search algorithm is pretty simple. Say that you need to find if a number exists in a given array or not.

// You will run a simple for loop and check every element untill you find the one you are looking for.
const array = [3, 8, 12, 6, 10, 2,43,5,6,45,12,65,43,11];

const searchForN = (arr, num)=> {

    for (let index = 0; index < arr.length; index++) {
        if (num === arr[index]) {
             return `${true} ${num} existe en el índice ${index}`;

        }   
    }
    return `${false} ${n} No existe el numero ingresado en el arreglo.`;
 
}

console.log(searchForN(array,65));