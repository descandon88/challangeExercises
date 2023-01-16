// Teléfono
// ○ Crear una función constructora que devuelva objetos del tipo
// teléfono, como argumento debe recibir un número de teléfono, el
// objeto creado tiene el número de llamadas que debe ser
// inicializado en cero y un método llamar que debe aumentar el
// número de llamados en uno.


// ● Puntos y líneas
// ○ Crear la función constructura punto que recibe un par de
// coordenadas (x,y) y devuelve un objeto punto en esa posición.
const FuncionPunto=(x,y)=>{
    let punto = [x,y];
    console.log(punto);
    return punto
}
FuncionPunto(3,4)
// ○ Crear la función constructora recta que recibe como argumento
// 2 puntos.
const FuncionRecta=(x1,y1,x2,y2)=>{
    let pendiente = 0
    let deltaX=x2-x1;
    let deltaY=y2-y1;
    pendiente = deltaY/deltaX;
    let interceptoY = y1-pendiente*x1
    console.log(`El punto#1:(${x1},${y1})`);
    console.log(`El punto#2:(${x2},${y2})`);
    if(interceptoY<0){    console.log(`Y = ${pendiente}X${interceptoY}`);}
    else {console.log(`Y = ${pendiente}X+${interceptoY}`);
}
}

FuncionRecta(-3,9,6,3);

