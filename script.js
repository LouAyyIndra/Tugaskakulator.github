function tambah(a,b){
    return a + b;
}
function kurang(a,b){
    return a - b;
}
function kali(a,b){
    return a * b;
}
function bagi(a,b){
    return a / b;
}

let operator = prompt("Masukan Operator : + - * /")
let a=parseInt(prompt("Masukan nilai 1:"))
let b=parseInt(prompt("Masukan nilai 2:"))

if(operator == '+'){
    var hasil = tambah(a,b)
    console.log(hasil)  
}
if(operator == '-'){
    var hasil = kurang(a,b)
    console.log(hasil)
}
if(operator == '*'){
    var hasil = kali(a,b)
    console.log(hasil)
}
if(operator == '/'){
    var hasil = bagi(a,b)
    console.log(hasil)
}