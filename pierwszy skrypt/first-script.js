//pierwszy skrypt
console.log('To jest moj pierwszy skrypt'); // to mój pierwszy skrypt
console.log("To jest moj drugi skrypt"); // to jest mój drugi skrypt
/*
Komentarz
kilku
liniowy
*/

//typy danych(zamiana ze stringa na inta)
const width = "20px"; //zmienna stała string
sum = parseInt(width, 10) + 30; //parsujemy stringa na inta. Pierwsza właściwość to zmienna parsowana, druga to na jaki system (w tym wypadku dziesiętny) + 30(int).
console.log(sum);
//Sprawdź czy istnieje zmienna age. Jeśli nie, stwórz ją i wypisz w konsoli
if(typeof age === "undefined"){ //sprawdzanie zmiennej age - jeśli jest nie zdefiniowana (nie ma konkretnego typu np. int - a nie ma)
    const age = 23; //to stwórz zmienną age (bo wyrzej jej nie było)
    console.log(age); //i wypisz w konsoli
}

//