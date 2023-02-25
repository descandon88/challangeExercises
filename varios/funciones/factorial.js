const factorial = (num) => {
    let result = 0;
    let arr = [num];
    let arrResult = [];

    for(let i=0; i < num-1; i++) {

        if (i==0) {
            result = num;          
            console.log(arr);
        }
        else if(i>0 ) {
            result =result*(num-i);
            arr.push(result);
            console.log(arr);

        }
    }

    return result;
}
console.log(factorial(8));