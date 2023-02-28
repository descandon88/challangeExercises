// FIBONACCI NUMBER

// In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones:



const fibonacciNumber=(num)=>{
let innerArray = [];
let spiralVar =0;
let spiralVar2 =0;
    for (let i = 0; i < num; i++) {

        if (i>1){
            spiralVar = innerArray[i-1];
            spiralVar2 = innerArray[i-2];
            innerArray.push(spiralVar+spiralVar2);
        }
        else {
            spiralVar += i;
            innerArray.push(spiralVar);
        }
        
    }
    return innerArray;
}

console.log(fibonacciNumber(13));