//Zadanie 1
const a = 2;
const b = 3;
const c = 4;

if(a > b && a > c){
console.log("a jest najwieksza");
}
else if(b > c){
console.log("b jest najwieksza")
}
else{
    console.log("c jest najwieksza");
}

//Zadanie 2
document.querySelector('#myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.querySelector('#formAge').value;
    const newAge = parseInt(age, 10);
    
    if (newAge >= 18){
        console.log("wszystko ok");
    }
    else{
        console.log("niestety dostep zablokowany");
    }
});