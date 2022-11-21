let num=90;
if (num >=80 && num <=100){
    document.write('A+')
}else if (num >=70 && num < 80){
    document.write('A')
}else if (num >=60 && num < 70){
    document.write('A-')
}else if (num >=50 && num < 60){
    document.write('B')
}else if (num >=40 && num < 50){
    document.write('C')
}else if (num >=33 && num < 40){
    document.write('D')
}else if (num >=0 && num < 33){
    document.write('Fail')
}else {
    document.write('Error')
}


function showText() {
    var test =document.getElementById('input').value
    document.getElementById('result').innerText = test;
}