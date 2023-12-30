let myObject = document.querySelector('.box');
let btn1 = document.querySelector('button');
let btn2 = document.querySelectorAll('button')[1];

console.log("Obj : ", myObject)
    console.log("Btn1 : ", btn1)
    console.log("Btn2 : ", btn2)
btn1.addEventListener('click', function () {
    myObject.classList.add('box-animate');
    this.disabled = true;
    btn2.disabled = false;
}, false);

btn2.addEventListener('click', function () {
    myObject.classList.remove('box-animate');
    this.disabled = true;
    btn1.disabled = false;
}, false);