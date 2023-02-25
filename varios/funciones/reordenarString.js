const reordenarString = (string) =>{
    let reorderesWord = '';
    reorderesWord = string.split('').reverse().join('');
    return reorderesWord;
}
let palabra = 'roma';
console.log(reordenarString(palabra));