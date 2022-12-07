tens = 00;
second = 00;
var myInterval;
function strt() {
    clearInterval(myInterval);
    myInterval = setInterval(buttonStart, 100);  
}
function buttonStart(){
    one = document.getElementById("tens").innerHTML;
    tens++;
    if (one<=9){
        document.getElementById("tens").innerHTML = "0" + tens;
    }
    if (one>9){
        document.getElementById("tens").innerHTML = tens; 
    }
    if (one>59){
        second++;
        document.getElementById("second").innerHTML = "0" + second; 
        tens=00;
        document.getElementById("tens").innerHTML = "0" + 0;
    }
    if(document.getElementById("second").innerHTML>9){
        document.getElementById("second").innerHTML = second;
    }
}
function reset(){
    tens = 00;
    second = 00;
    clearInterval(myInterval);
    document.getElementById("tens").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
}
function stop(){
    clearInterval(myInterval);
}
    
    