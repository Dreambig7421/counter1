let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    document.getElementById("counter").innerHTML = count;

}

document.getElementById("resetBtn").onclick = function() {
    count = 0;

    document.getElementById("counter").innerHTML = count;

}

document.getElementById("increaseBtn").onclick = function() {
    
    count += 1;
    document.getElementById("counter").innerHTML = count;

}

