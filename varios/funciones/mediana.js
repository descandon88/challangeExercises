const mediana =(arr)=>{
    let median = 0; 
    let medianPar=0;
    arr.sort((a, b) => a - b)
    let mitadArray = arr.length /2;

    if ((arr.length % 2) !==0) {
        for (let index = 0; index < arr.length; index++) {
            if ( index === parseInt(mitadArray)) { 
                median = arr[index]
            };
        }
    }
    else {
        n2=arr.length /2
        n3=n2+1
        for (let index = 0; index < arr.length; index++) {
            if ( index === n2  || index ===n3) { 
                medianPar+=arr[index];
            };
        }
        median = medianPar/2;
    }
        
    

    console.log(arr);
    console.log(mitadArray);
    return median;
}

let arreglo = [31,3,2,12,43,654,2,13,7,11,1,8,9];

console.log(mediana(arreglo));