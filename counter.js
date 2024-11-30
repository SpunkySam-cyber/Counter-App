let count = 0
const number = document.getElementById('number')
const decbtn = document.getElementById('decbtn')
const incbtn = document.getElementById('incbtn')
const resetbtn = document.getElementById('rsbtn')

decbtn.onclick = function(){
    count--;
    number.textContent = count;
}

incbtn.onclick = function(){
    count++;
    number.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    number.textContent = count;
}



