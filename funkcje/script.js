/*
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

//Zadanie 5
function months(name, month){
        month = month.toLowerCase();

    if(month === grudzien || styczen|| luty){
        return name + "jeździ na sankach";
    }else if(mont === marzec || kwiecien || maj){
        return name + "chodzi po kaluzach"
    }else if(month === czerwiec || lipiec || sierpien){
        return name + "sie opala"
    }else if(month === wrzesien || pazdziernik || listopad){
        return nameme + "zbiera liscie"
    }else{
        return name + "uczy się JavaScript"
    }
}

//Zadanie 6
months(grzegorz, maj);

//Zadanie 7
function sortString(txt, char){
    const tab = txt.split(char);
    tab.sort();

    const newStr = tab.join("|");
    return newStr;
}

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
console.log(str);
console.log(sortString(str,",|"));

//zadanie 8
function getMiniFromTab(tab){
    var min = 100;
    for(var i=0; i<tab.lenght; i++){
        if(tab[i] < min){
            min = tab[i];
        }
    }
    return min;
}

//generator tablicy
var tab = [];
for(var i=0; i<10; i++){
    tab.push(Math.floor(Math.random()* 10)+1);
}

console.log(getMiniFromTab(tab));


//Zadanie8
function bigNames(tab){
for(var i =0; i<tab.lenght;i++){
    tab[i] = tab[i].toUpperCase();
}
    return tab;
}

function mixNames(tab){
    for(var i=0; i<tab.lenght; i++){
        tab[i] = mix(tab[i]);
    }
    return tab;
}

var tab = ["Ania", "Marcin", "Bartek", "Piotr"];
console.log(bigNames(tab));
console.log(mixNames(tab));

//Zadanie 10
function duplicateText(txt, nr){
    if(typeof txt !== "string"){
        txt = "";
    }
    if(typeof nr === "number"){
        nr = 2;
    }

    let newStr = '';
    for(let i=0; i<nr; i++){
        newStr += txt;
    }
    return newStr;
}
console.log(duplicateText("maslo",10));
*/
//Zadanie 11
function counter(){
    let a = 0;
    return function(){
    return a++;
    }
}
const count = counter();
count();
count();