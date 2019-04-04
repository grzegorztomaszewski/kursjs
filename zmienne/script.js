//Zadanie 1
var myVar1 = 3;
var myVar2 = 2;

console.log(myVar1 + myVar2);
console.log(myVar1 - myVar2);
console.log(myVar1 * myVar2);
console.log(myVar1 / myVar2);
console.log(typeof myVar1);
console.log(typeof myVar2);

//Zadanie 2
var CVAR1 = 100;
var CVAR2 = "wp.pl";

CVAR1 = 200;
CVAR2 = "onet.pl";

//Zadanie 3
console.log(text);
var text = "przykladowy tekst";

//Zadanie 4
const CONST1 = 100;
const CONST2 = "wp.pl";
//poniżej jest błąd - nie można zmieniać wartości stałych
//const CONST1 = 200; //error
//const CONST2 = "onet.pl"; //error

//Zadanie 5
console.log(text2);
let text2 = "przykladowy tekst";
//powyżej jest tzw. hoisting, a w zasadzie jego brak
//hoisting działa tylko przy typie "var"
//nie można używać zmiennych deklarowanych przez let i const przed ich deklaracją
//hoisting umożliwia: 1. wypisanie na konsoli
                    //2. deklaracje zmiennej
//w innych przypadkach to nie działa