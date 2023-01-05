// Cuadrado lleno:
// *****
// *****
// *****
// *****
// *****
const cuadroLleno=(b,h)=>{
    let figura = []
    for (let index = 0; index < h; index++) {
        // console.log('*');
        for (let j = 0; j < b; j++) {
            figura +='*';    
        }
        console.log(figura);
        figura = [];
    }
}

cuadroLleno(4,4);

const cuadroLlenoV2 = (dim)=>{
    let figura = [];
    let variable='';
    for (let index = 0; index < dim; index++) {
        for (let j = 0; j < dim; j++) {
            variable +='*';
            figura.push('*');
        }
        // figura.push(variable);
        variable+='\n';  
    }
     

    console.log(variable);
};

cuadroLlenoV2(6);


// Cuadrado hueco:
// *****
// *   *
// *   *
// *   *
// *****
const cuadroHueco =(num)=> {
    let lastNum = num-1;
    let figura = [];
    let variable ='';
    for (let index = 0; index < num; index++) {
        if (index === 0 || index ===lastNum) {
            for (let i = 0; i < num; i++ ) {
                variable +='*';
                figura.push('*');
            }
            variable+='\n'; 
        } else {
            for (let j=0; j < num; j++) {
                if (j!==0 && j!==lastNum) 
                { 
                variable +=' ';
                figura.push(' ');
                }
                else {
                    variable +='*';
                    figura.push('*');
                }
                // else {
                //     variable +='';
                //     figura.push('');
                // }
            }
            variable+='\n'; 
        }
    
        
    }
    console.log(variable);
}

cuadroHueco(5);

// Tablero de ajedrez:
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *

// Pirámide izquierda:
// *
// **
// ***
// ****
// *****

const piramideIzquierda = (max) => {
    let ancho = [];
    let col ='';
    for (let index = 1; index <= max; index++) {
        col +='*';
        console.log(col);
        
    }
    

}

piramideIzquierda (6);

// Diamante:
// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *

const diamante =(maxcol)=>{
    let sup ='';
    let inf ='';
    for (let index = 0; index < maxcol; index++) {
        sup +='*';
        console.log(sup);    
    }
    inf = sup;
    for (let index = 1 ; index < maxcol; index++) {
         inf = sup.substring(index);

        console.log(inf);    
    }
}
diamante (7);

