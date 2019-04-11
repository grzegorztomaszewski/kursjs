//Zadanie 1
function printText(txt){
    return "Liczba liter: " + txt.length;
}
console.log(printText("Ala ma kota"));

//Zadanie 2
function sumTable(tab){
    let sum = 0;
    for(let i=0; i<tab.length; i++){
        sum += tab[i];
    }
    return sum;
}

const arr = [1,2,3,4];
console.log(sumTable(arr));
console.log(sumTable([1,2,3]));

//Zadanie 3
function mix(defaultText){
    let newTxt = '';
    for(let i = 0; i<defaultText.length; i++){
        if(i % 2 === 0){
            newTxt += defaultText.charAt(i).toUpperCase();
        }
        else{
            newTxt += defaultText.charAt(i).toLowerCase();
        }
    }
    return newTxt;
}

console.log(mix("Ala ma kota"));

//Zadanie 4
function checkNumber(atrb1, atrb2){
    if(typeof atrb1 !== 'number' || typeof atrb2 !== 'number') {
        return false;
    }
    else{
        return atrb1 * atrb2;
    }
}
console.log(checkNumber(3, 2));
console.log(checkNumber("Ala", 2));