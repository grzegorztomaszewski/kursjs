//Zadanie 1
let str = "";

for(i=0; i<6; i++){
    str += "*";
}
console.log(str);

//Zadanie 2
let str1 = "";
for(let i = 1; i<=10; i++){
    str1 += i;
}
console.log(str1);

//Zadanie 3
let str2 = "";
for(i=0; i<6; i++){
    for(let j=0; j<6; j++){
        str2 +="*";
    }
    str2 += "\n";
}
    console.log(str2);

//Zadanie 4
const text = "przykladowy tekst";
let str3 = "";

str3 += "╔";
for(i=0; i<text.length+4; i++){
    str3 += "═";
}
str3 += "╗\n";

str3 += "║  " + text + "  ║\n";

str3 += "╚";

for(i=0; i< text.length+4; i++){
    str3 += "═";
}

str3 += "╝\n";

console.log(str3);