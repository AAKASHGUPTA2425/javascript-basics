
const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomcolor());


const body = document.querySelector('body')
let interval;
document.querySelector('#start').addEventListener('click', function () {
    const col = function () {
        body.style.backgroundColor = randomcolor()
    }
    if (!interval) {
        interval = setInterval(col, 1000);
    }
})
document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(interval)
    console.log('clicked');
    interval = null;

})