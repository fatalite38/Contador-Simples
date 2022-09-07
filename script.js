var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    
}

addEventListener("click", function() {
    if (currentNumber <= -1) {
        document.getElementById("currentNumber").style.color = 'red';
    
    }else if (currentNumber == 0){
        document.getElementById("currentNumber").style.color = 'black';
    }else{
        document.getElementById("currentNumber").style.color = 'blue';
    }
})