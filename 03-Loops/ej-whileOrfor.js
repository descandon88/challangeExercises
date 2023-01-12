// Ejercicio#1 - Encontrar todos los divisores de un número.
const numDivisor = (num)=> {
    let arreglo = [];
    for (let i=0; i < num; i++) {
        if (num%i===0) {
            arreglo.push(i);
        }
     }
    console.log('Los números divisores de '+ num + ' son: '+ arreglo); 
    
}

numDivisor(27);
// Ejercicio#2 - Determinar si un número ingresado por el
// usuario en un loop es primo o no, validar que
// el número ingresado sea mayor o igual a
// dos.
const numIngresadoEsPrimo = (num) => {
    let residuo = 0;
    let array =[];
    if (num >=2 && num%1===0 && num%num===0) {
        for(let i =2;i<num;i++) { 
            if (num%i===0) {
                residuo +=1;
                array.push(i);
                console.log(array);
            }
          
        }
        if(residuo >0){console.log(residuo + " No es numero primo!")} else {console.log("Es numero primo")}
    }
    else {
        console.log('vuelva a intentar');
    }
}

numIngresadoEsPrimo(7);

// Ejercicio#3 - Crear un programa que determine si un
// número es perfecto o no, (se dice que un
// número es perfecto si el número es igual a
// sus divisores, ejemplos 6 = 1 + 2 + 3)

const numEsPerfecto = (num)=> {
    let localArray = []
    let total =0;
    for (let index = 0; index < num; index++) {
       if (num%index ==0) {
        localArray.push(index);
       }
        
    }
    for (let index = 0; index < localArray.length; index++) {
        total += localArray[index];
    }
    if (total ===num) {
        console.log('La suma de los divisores ['+ localArray + '] es '+total+' y es igual al numero ingresado '+ num );
        console.log('Es número perfecto! ')

    }
    else {
        console.log('La suma de los divisores [ '+ localArray + ' ]'+'es igual a '+total+ ' != ' +num);
        console.log('No es número perfecto! ')
    }
}

numEsPerfecto(6);
// Ejercicio#4 - Generar los primeros N números
// primos, donde n es ingresado por el
// usuario.
const generarNprimerosNumPrimos = (n)=> {
    let isPrime=true;
    let primos =[];

    let noprimos = [];
    for (let index=1; index<=n; index++ ) {
        if (index>=2 ) { 
            for (let j=2; j<index; j++){ 
                    if(index % j===0) { 
                        isPrime = false;
                        break;
                     } 
                    isPrime = true;
            }
            if (isPrime) {
                primos.push(index);
            } else {
                noprimos.push(index);
            }
            console.log(index); 

        }
    }
    console.log('los numeros primos de N son: '+ primos);
    console.log('los numeros NO primos de N son: '+ noprimos);
 

}
generarNprimerosNumPrimos(17);
// Ejercicio #5 
// Generar los primeros N números
// perfectos.

const generarNprimerosNumPerfectos = (num)=> {
    let array = [];
    let sum = 0 ;
    for (let index = 1; index <= num; index++) {
        for (let j = 0; j < index; j++) {
            if (index%j===0) {
                array.push(j);
                sum +=j;
            }                
        }
        
        // console.log('index : '+index);
        if (sum===index){console.log('el número '+index + ' SI es un numero perfecto porque la suma de sus dividores ['+ array + '] es igual a '+ index)}else {console.log('el número '+index + ' no es numero perfecto porque la suma de sus divisores ['+array+'] es igual '+ sum)}
        sum=0;
        array=[];
    }
       
}

generarNprimerosNumPerfectos(8);