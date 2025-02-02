var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modalTwo = document.getElementById('myModalTwo');
var btnTwo = document.getElementById("myBtnTwo");
var spanTwo = document.getElementsByClassName("closeTwo")[0];

btnTwo.onclick = function () {
    modalTwo.style.display = "block";
}

spanTwo.onclick = function () {
    modalTwo.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalTwo) {
        modalTwo.style.display = "none";
    }
}

var modalThree = document.getElementById('myModalThree');
var btnThree = document.getElementById("myBtnThree");
var spanThree = document.getElementsByClassName("closeThree")[0];

btnThree.onclick = function () {
    modalThree.style.display = "block";
}

spanThree.onclick = function () {
    modalThree.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalThree) {
        modalThree.style.display = "none";
    }
}







