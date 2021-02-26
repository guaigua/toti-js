const hamburgerButton = document.getElementById('hamburger-button');
const headerLinks = document.querySelectorAll('header .container .menu a');

headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => hamburgerButton.checked = false);
})

var arr = [ 'a', 'b', 'c', 'd'];

arr.forEach(function(element,index,arreglo){
    console.log(element);
    console.log(index);
    console.log(arreglo);
});

