const logo = document.querySelector('.logo')
const colors = ['#a8d3c6','#c9e4bd','#f8981d']
let i = 0;

setInterval(function() {
    logo.style.background = colors[i];
    i++;
    if (i>2) {
        i = 0;
    }
}, 1000);
