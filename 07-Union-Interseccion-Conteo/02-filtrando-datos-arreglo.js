// Crear una función que reciba un arreglo con números y devuelva un nuevo
// arreglo con solo los números pares, hint: utilizar reduce()

const devuelveArrayPar =(arr)=>{
    const arregloPares = arr.reduce((acc,cv)=>{
        if (cv%2==0) {  acc.push(cv);  }
        return acc;
    },[])
    console.log(arregloPares);
    return arregloPares
};
let array1 = [1,7,44,32,55,100,12,32,33,47];

devuelveArrayPar(array1);



// ● Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo
// que contenga solo las palabras que empiezan con una vocal.

const newArrayPalabrasVocal = (arr) =>{
    let newArray=[];
    arr.map(obj => {
        if (obj[0].toLowerCase()=="a" || obj[0].toLowerCase()=="e" || obj[0].toLowerCase()=="i" || obj[0].toLowerCase()=="o" || obj[0].toLowerCase()=="u" ){ 
            newArray.push(obj[0]);
            return newArray
        }
    });
    console.log(newArray);
}
array2 = ["hola","bebe","adorno","ballena","Ernesto","idiologia", 'Urdesa'];
newArrayPalabrasVocal(array2);