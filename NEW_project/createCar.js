
//데이터 받아오기////////////
const carName = localStorage.getItem('key');


///////////////


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

//종료하기
const mainExit = document.getElementById('mainExit');
const exitBox = document.getElementById('exitBox');
mainExit.addEventListener('click', () => {
    if (tmp == 0) {
        exitBox.style.display = 'block';
        overray.style.height = '100%';
        tmp = -1;
    } else {
        exitBox.style.display = 'none';
        overray.style.height = '0';
        tmp = 0;
    }
})

const resultBtn1 = document.getElementById('resultBtn1');
const resultBtn2 = document.getElementById('resultBtn2');
resultBtn1.addEventListener('click', () => {
    window.location.href = "/NEW_project/main.html";
})
resultBtn2.addEventListener('click', () => {
    exitBox.style.display = 'none';
    overray.style.height = '0';
})


/////////////////////중요!!!!!!!!!!!!!!
let carNum = 1;
let carPage = 1;
const carModel = document.getElementById('carModel');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
carModel.innerHTML = `<img id="modelView" src="/pictures/${carName}${carNum}/${carPage}.png">`;
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
        carModel.innerHTML = `<img id="modelView${i}" src="/pictures/${carName}${carNum}/${i}.png">`;
        document.getElementById(`modelView${i}`).style.display = "none";
    }
}


leftBtn.addEventListener('click', () => {
    incre();
    startParg();
    carModel.innerHTML = `<img id="modelView" src="/pictures/${carName}${carNum}/${carPage}.png">`;
})
rightBtn.addEventListener('click', () => {
    decre();
    startParg();
    carModel.innerHTML = `<img id="modelView" src="/pictures/${carName}${carNum}/${carPage}.png">`;
})

// CarModel 시작
// outcolor
const outCarColor1 = document.getElementById('outCarColor1');
const outCarColor2 = document.getElementById('outCarColor2');
const outCarColor3 = document.getElementById('outCarColor3');


outCarColor1.addEventListener('click', () => {
    carNum = 1;
    outMarkOn(1);
    outMarkOff(2);
    outMarkOff(3);
    startParg();
    carModel.innerHTML = `<img id="modelView" src="/pictures/${carName}${carNum}/${carPage}.png">`;
})
outCarColor2.addEventListener('click', () => {
    carNum = 2;
    outMarkOff(1);
    outMarkOn(2);
    outMarkOff(3);
    startParg();
    carModel.innerHTML = `<img id="modelView" src="/pictures/${carName}${carNum}/${carPage}.png">`;
})
outCarColor3.addEventListener('click', () => {
    carNum = 3;
    outMarkOff(1);
    outMarkOff(2);
    outMarkOn(3);
    startParg();
    carModel.innerHTML = `<img id="modelView" src="/pictures/${carName}${carNum}/${carPage}.png">`;
})

function outMarkOn(e) {
    document.getElementById(`outCarColor${e}`).innerHTML = `<i class="bi bi-check-square-fill"></i>`;
    if (e == 2) {
        document.getElementById(`outCarColor${e}`).innerHTML = `<i style="color: white;" class="bi bi-check-square-fill"></i>`;
    }
}
function outMarkOff(e) {
    document.getElementById(`outCarColor${e}`).innerHTML = '';
}


//in color
const inCarColor1 = document.getElementById('inCarColor1');
const inCarColor2 = document.getElementById('inCarColor2');
const modelbtn = document.getElementById('outBtn');

inCarColor1.addEventListener('click', () => {
    document.getElementById('outColorBgc').innerHTML = '';
    inMarkOn(1);
    inMarkOff(2);
    document.getElementById('outColorBgc').innerHTML = `
    <img src="/pictures/내장배경1.png" alt="">
    <button id="outBtn" type="button">X</button>
    `;
    document.getElementById('outBtn').addEventListener('click', () => {
        document.getElementById('outColorBgc').innerHTML = '';
    });
})
inCarColor2.addEventListener('click', () => {
    document.getElementById('outColorBgc').innerHTML = '';
    inMarkOff(1);
    inMarkOn(2);
    document.getElementById('outColorBgc').innerHTML = `
    <img src="/pictures/내장배경2.png" alt="">
    <button id="outBtn" type="button">X</button>
    `;
    document.getElementById('outBtn').addEventListener('click', () => {
        document.getElementById('outColorBgc').innerHTML = '';
    });
})





function inMarkOn(e) {
    document.getElementById(`inCarColor${e}`).innerHTML = `<i style="color: white; font-size: 30px;" class="bi bi-check-square-fill"></i>`;
    if (e == 2) {
        document.getElementById(`inCarColor${e}`).innerHTML = `<i style="font-size: 30px;" class="bi bi-check-square-fill"></i>`;
    }

}
function inMarkOff(e) {
    document.getElementById(`inCarColor${e}`).innerHTML = '';
}






/**************************************************************/



/*********************result *********************************/


const modelBox1 = document.getElementById('modelBox');

document.getElementById('resultBtn').addEventListener('click', () => {
    //로딩버튼
    document.getElementById('loadingBox1').style.display = 'block';
    overray.style.height = '100%';
    setTimeout(function () {
        document.getElementById('loadingBox1').style.display = 'none';
        overray.style.height = '0';
        document.getElementById('headerTitleText2').style.color = 'grey';
        document.getElementById('headerTitleText3').innerHTML = '|　　03　　차량 완성';
        document.getElementById('section1').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
        modelBox1.innerHTML = `<img src="/pictures/${carName}${carNum}/${carPage}.png">`;
    }, 3000);




})

document.getElementById('headerTitleText2').addEventListener('click', () => {
    modelBox1.innerHTML = '';
    document.getElementById('headerTitleText3').innerHTML = '';
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section1').style.display = 'block';
})

const leftBtn5 = document.getElementById('leftBtn5');
const rightBtn5 = document.getElementById('rightBtn5');



leftBtn5.addEventListener('click', () => {
    incre();
    startParg();
    modelBox1.innerHTML = `<img src="/pictures/${carName}${carNum}/${carPage}.png">`;
})
rightBtn5.addEventListener('click', () => {
    decre();
    startParg();
    modelBox1.innerHTML = `<img src="/pictures/${carName}${carNum}/${carPage}.png">`;
})



/************************************ *********************************/



document.getElementById('carName1').innerHTML = `　|　${carName}`;
document.getElementById('carName2').innerHTML = `나의 ${carName}`;
document.getElementById('carName3').innerHTML = `${carName} - Exclusive(스탠다드) 19인치`;
document.getElementById('carName4').innerHTML = `${carName} 전기차 Exclusive(스탠다드) 19인치 오토`;
document.getElementById('carName5').innerHTML = `나의 ${carName} (이)가 완성되었습니다!`;
document.getElementById('carName6').innerHTML = `${carName} 전기차 Exclusive(스탠다드) 19인치 오토`;