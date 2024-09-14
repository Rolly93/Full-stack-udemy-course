function add(num1 , num2){
    return num1 +num2;
}
function substrac(num1 , num2){
    return num1 - num2;
}
function multiplay(num1 , num2){
    return num1 * num2;
}
function devide(num1 ,num2){
    return num1 / num2;
}
function calculador (num1 , num2 , operator){
    return operator(num1,num2);
}
console.log(calculador(9,8,add));
