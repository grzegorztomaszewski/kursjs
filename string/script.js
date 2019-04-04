//Zadanie 1
const text = "Ala ma kota";
console.log(text, text.length);

//Zadanie 2
const text2 = "Bardzo lubię jeść marchewkę";
const words = text2.split(" ");
console.log(words.length);

//Zadanie 3
let name = "marcin";
name = name.charAt(0).toUpperCase() + name.slice(1);
console.log(name);

//Zadanie 4
const email = "loremimpsum@gmail.com";
const em = email.indexOf("@"); //szuka w zmiennej email znaku "@" i zwraca jej pozycję (liczbę).
//console.log(em);
if (em>-1){
    console.log("email zawiera @");
}
else{
    console.log("email nie zawiera @");
}

//Zadanie 5
const text3 = "Ucze sie stringow w C++";
const text3part = text3.slice(0, text3.indexOf("C++"));
textfix = text3part + "Javascript";
console.log(textfix);

//Zadanie 6
let url = "http://mojastrona.pl";
url = url+ "?text=" + encodeURI(textfix);
console.log(url);

//Zadanie 7
const text4 = "ALA ma kota";
console.log(text4.toLowerCase());
console.log(text4.toUpperCase());
let textMix = "";
for(let i=0; i<text4.length; i++){
    if(i%2===0){
        textMix += text.charAt(i).toLowerCase();
    }
    else{
        textMix += text.charAt(i).toUpperCase();    
    }
}
console.log(textMix);

console.log(text4.replace("ALA","OLA"));