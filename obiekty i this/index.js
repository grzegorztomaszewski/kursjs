//Zadanie 1
// prod1 = {
//     name : "Marcin",
//     price : 100,
//     weight : 70
// }

// prod2 = {
//     name : "Tomek",
//     price : 200,
//     weight : 80
// }

// console.log(prod1);
// console.log(prod2);
// console.log(`Produkt numer jeden to: ${prod1.name}`);
// console.log(`Produkt numer dwa to: ${prod2.name}`);
// console.log(`Produkty kosztują razem: ${prod1.price + prod2.price}`);
// console.log(`Produkty ważą razem: ${prod1.weight + prod2.weight}`);

//Zadanie 2
// currentUser = {
//     name : "Marcin",
//     surname : "Nowak",
//     email : "marcinnowak@gmail.com",
//     www : "www.marcinnowak.com",
//     userType : "editor",
//     show : function() {
//         console.log(`Imię: ${this.name}`);
//         console.log(`Nazwisko: ${this.surname}`);
//         console.log(`Email: ${this.email}`);
//         console.log(`WWW: ${this.www}`);
//         console.log(`Typ użytkownika: ${this.userType}`);
//     }
// }
// currentUser.show();

//Zadanie 3
book = {
    title : "Harry Potter i Kamień filozoficzny",
    author : "J.K. Rowlling",
    pageCount : 285,
    publisher : "Twoja Księgarnia",
    showDetails : function(){
        for (const i in book) {
            if (typeof this[i] !== "function") {
                console.log("Klucz: "+i);
                console.log("Wartość: "+this[i]);
            }
        }
    }
}
book.showDetails();