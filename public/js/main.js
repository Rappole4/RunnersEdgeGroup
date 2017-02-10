var incart1 = document.getElementById('incart1');
var incart2 = document.getElementById('incart2');
var incart3 = document.getElementById('incart3');
var incart4 = document.getElementById('incart4');
var incart5 = document.getElementById('incart5');
var incart6 = document.getElementById('incart6');

document.addEventListener("DOMContentLoaded",function(event){
    add1.onclick = function(){
    Cookies.set('product1', ~~Cookies.get('product1') + 1);
    console.log(parseInt(Cookies.get('product1')));
    incart1.innerText = " Currently in cart:" + parseInt(Cookies.get('product1'));
    };
    sub1s.onclick = function(){
    Cookies.set('product1', ~~Cookies.get('product1') - 1);
    console.log(parseInt(Cookies.get('product1')));
    incart1.innerText = " Currently in cart:" + parseInt(Cookies.get('product1'));
    };
    add2.onclick = function(){
    Cookies.set('product2', ~~Cookies.get('product2') + 1);
    console.log(parseInt(Cookies.get('product2')));
    incart2.innerText = " Currently in cart:" + parseInt(Cookies.get('product2'));
    };
    sub2s.onclick = function(){
    Cookies.set('product2', ~~Cookies.get('product2') - 1);
    console.log(parseInt(Cookies.get('product2')));
    incart2.innerText = " Currently in cart:" + parseInt(Cookies.get('product2'));
    };
    add3.onclick = function(){
    Cookies.set('product3', ~~Cookies.get('product3') + 1);
    console.log(parseInt(Cookies.get('product3')));
    incart3.innerText = " Currently in cart:" + parseInt(Cookies.get('product3'));
    };
    sub3s.onclick = function(){
    Cookies.set('product3', ~~Cookies.get('product3') - 1);
    console.log(parseInt(Cookies.get('product3')));
    incart3.innerText = " Currently in cart:" + parseInt(Cookies.get('product3'));
    };
    add4.onclick = function(){
    Cookies.set('product4', ~~Cookies.get('product4') + 1);
    console.log(parseInt(Cookies.get('product4')));
    incart4.innerText = " Currently in cart:" + parseInt(Cookies.get('product4'));
    };
    sub4s.onclick = function(){
    Cookies.set('product4', ~~Cookies.get('product4') - 1);
    console.log(parseInt(Cookies.get('product4')));
    incart4.innerText = " Currently in cart:" + parseInt(Cookies.get('product4'));
    };
    add5.onclick = function(){
    Cookies.set('product5', ~~Cookies.get('product5') + 1);
    console.log(parseInt(Cookies.get('product5')));
    incart5.innerText = " Currently in cart:" + parseInt(Cookies.get('product5'));
    };
    sub5s.onclick = function(){
    Cookies.set('product5', ~~Cookies.get('product5') - 1);
    console.log(parseInt(Cookies.get('product5')));
    incart5.innerText = " Currently in cart:" + parseInt(Cookies.get('product5'));
    };
    add6.onclick = function(){
    Cookies.set('product6', ~~Cookies.get('product6') + 1);
    console.log(parseInt(Cookies.get('product6')));
    incart6.innerText = " Currently in cart:" + parseInt(Cookies.get('product6'));
    };
    sub6s.onclick = function(){
    Cookies.set('product6', ~~Cookies.get('product6') - 1);
    console.log(parseInt(Cookies.get('product6')));
    incart6.innerText = " Currently in cart:" + parseInt(Cookies.get('product6'));
    };
$(document).ready(function(){
    $("#add1").click();
    $("#sub1s").click();
    $("#add2").click();
    $("#sub2s").click();
    $("#add3").click();
    $("#sub3s").click();
    $("#add4").click();
    $("#sub4s").click();
    $("#add5").click();
    $("#sub5s").click();
    $("#add6").click();
    $("#sub6s").click();
    });
});