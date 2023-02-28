

var _tmp1 = 'hola';
var _tmp2 = 'Nombre';
var _tmp3 = 23;
var _tmp4 = 34;
_tmp4 = 10;
const  total = _tmp3 + _tmp4; //33

// total = 43;
console.log(total);


function reverseString (str) {
    // let newString="";
    // for (let index = str.length; index >=0; index--) {
    //     newString += str[index];
    // }
    // return newString;
    let innerVar = "";
    innerVar = str.split("").reverse().join("");
    return innerVar;
}

console.log(reverseString("AMOR"));