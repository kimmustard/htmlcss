

const info = document.querySelector('#info');
const summaryInfo = document.querySelector('#summaryInfo');
const overray = document.getElementById('bgcOverray');
let tmp = 0;
info.addEventListener('click', () => {
    if (tmp == 0) {
        summaryInfo.style.display = 'block';
        overray.style.height = '100%';
        tmp = -1;
    } else {
        summaryInfo.style.display = 'none';
        overray.style.height = '0';
        tmp = 0;
    }
})


let carPage = 1;
const carModel = document.getElementById('carModel');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

function incre() {
    if (carPage == 60) {
        carPage = 1;
    } else {
        carPage++;
    }
}

function decre() {
    if (carPage == 1) {
        carPage = 60;
    } else {
        carPage--;
    }
}
function startParg() {
    for (let i = 1; i <= 60; i++) {
        carModel.innerHTML = `<img id="modelView${i}" src="/pictures/아이오닉5/${i}.png">`;
        document.getElementById(`modelView${i}`).style.display = "none";
    }
}
leftBtn.addEventListener('click', () => {
    incre();
    startParg();
    carModel.innerHTML += `<img id="modelView" src="/pictures/아이오닉5/${carPage}.png">`;
})
rightBtn.addEventListener('click', () => {
    decre();
    startParg();
    carModel.innerHTML += `<img id="modelView" src="/pictures/아이오닉5/${carPage}.png">`;
})
