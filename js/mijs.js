// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems,{
//         indicators: true
//     });
//   });

// window.addEventListener('load', ()=>{

// setTimeout(carga, 2000);

// function carga() {

// document.getElementById('circulo').className = 'hide';
// document.getElementById('contenido').className = '';

// }


// })


//SIDENAV
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});


//SLIDER
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 500,
    interval: 6000
});

