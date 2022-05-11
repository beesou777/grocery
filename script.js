let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    };

};

var date = new Date('may 19,2022 00:00:00').getTime();
 function countDown(){
     let now = new Date().getTime();
     gap = date - now;

     let second = 1000;
     let minutes = second * 60;
     let hour = minutes * 60;
     let day = hour * 24;


     let d = Math.floor(gap /(day));
     let h = Math.floor((gap % (day)) / (hour));
     let m = Math.floor((gap % (hour))/(minutes));
     let s = Math.floor((gap % (minutes)) / (second));

     document.getElementById('day').innerText = d;
     document.getElementById('hour').innerText = h;
     document.getElementById('min').innerText = m;
     document.getElementById('sec').innerText = s;

 }

 setInterval(function(){
     countDown();

 },1000)