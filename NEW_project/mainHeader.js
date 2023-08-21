let searchSwitch = 0;
function mainSearch() {
    if (searchSwitch == 0) {

        document.getElementById('dynamicSearch').innerHTML = `
                
                    <div class="headerContainer2">
                    <input type="text" id="inputSearch" autofocus placeholder="검색어를입력해 주세요.">
                    <i class="bi1 bi-search"></i>
                    <i class="bi2 bi-x-circle-fill"></i>
                    </div>`;
        document.getElementById('headerContainer').style.backgroundColor = "white";
        document.getElementById('bgcOverray').style.height = "1400px";
        document.getElementById('bgcOverray').style.backgroundColor = "rgb(0, 0, 0, 0.7)";
        searchSwitch = -1;
    } else if (searchSwitch == -1) {
        document.getElementById('headerContainer').style.backgroundColor = "";
        document.getElementById('bgcOverray').style.backgroundColor = "";
        document.getElementById('bgcOverray').style.height = "0";
        document.getElementById('dynamicSearch').innerHTML = ``;
        searchSwitch = 0;
    }
}



let loginList = document.getElementById('loginPage');
loginList.addEventListener('mouseover', () => {
    document.getElementById('loginPageList').style.display = 'block'
    document.getElementById('headerContainer').style.backgroundColor = "white";
    document.getElementById('bgcOverray').style.backgroundColor = "";
    document.getElementById('bgcOverray').style.height = "0";
    document.getElementById('dynamic').innerHTML = ``;
    document.getElementById('dynamicSearch').innerHTML = ``;
    searchSwitch = 0;
})

loginList.addEventListener('mouseout', () => {
    document.getElementById('headerContainer').style.backgroundColor = "";
})


document.getElementById('loginPageList').addEventListener('mouseover', () => {
    document.getElementById('headerContainer').style.backgroundColor = "white";
    document.getElementById('dynamicSearch').innerHTML = ``;
    searchSwitch = 0;

})
document.getElementById('loginPageList').addEventListener('mouseleave', () => {
    document.getElementById('headerContainer').style.backgroundColor = "";
    document.getElementById('loginPageList').style.display = 'none'
    document.getElementById('dynamicSearch').innerHTML = ``;
    searchSwitch = 0;

})





/* 슬라이드 */



let pageCnt = 1;
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const car = document.getElementById(`car${pageCnt}`);


function incre() {
    if (pageCnt == 6) {
        pageCnt = 1;
    } else {
        pageCnt++;
    }
}

function decre() {
    if (pageCnt <= 1) {
        pageCnt = 6;
    } else {
        pageCnt--;
    }
}

function leftBtnClick() {
    document.getElementById(`carText${pageCnt}`).style.display = 'none';
    document.getElementById(`car${pageCnt}`).style.display = 'none';
    document.getElementById(`page${pageCnt}`).innerText = '○';
    document.getElementById(`page${pageCnt}`).style.color = 'white';
    decre();
    btnName();
    document.getElementById(`car${pageCnt}`).style.display = 'block';
    document.getElementById(`car${pageCnt}`).style.animationName = "move2";
    document.getElementById(`page${pageCnt}`).innerText = '●';
    document.getElementById(`page${pageCnt}`).style.color = 'rgb(10, 80, 156)';

}


function rightBtnClick() {
    document.getElementById(`carText${pageCnt}`).style.display = 'none';
    document.getElementById(`car${pageCnt}`).style.display = 'none';
    document.getElementById(`page${pageCnt}`).innerText = '○';
    document.getElementById(`page${pageCnt}`).style.color = 'white';
    incre();
    btnName();
    document.getElementById(`car${pageCnt}`).style.display = 'block';
    document.getElementById(`car${pageCnt}`).style.animationName = "move1";
    document.getElementById(`page${pageCnt}`).innerText = '●';
    document.getElementById(`page${pageCnt}`).style.color = 'rgb(10, 80, 156)';
}






//페이지별 버튼명 색인//

function btnName() {
    switch (pageCnt) {
        case 1:
            document.getElementById('text1').innerText = 'IONIQ 5 N';
            document.getElementById('text2').innerText = 'SONATA The Edge';
            document.getElementById(`carText${pageCnt}`).style.display = 'block';
            break;
        case 2:
            document.getElementById('text1').innerText = 'The all-new SANTA FE';
            document.getElementById('text2').innerText = 'The new AVANTE N';
            document.getElementById(`carText${pageCnt}`).style.display = 'block';
            break;
        case 3:
            document.getElementById('text1').innerText = 'SONATA The Edge';
            document.getElementById('text2').innerText = 'CASPER';
            document.getElementById(`carText${pageCnt}`).style.display = 'block';
            break;
        case 4:
            document.getElementById('text1').innerText = 'The new AVANTE N';
            document.getElementById('text2').innerText = 'BRAND';
            document.getElementById(`carText${pageCnt}`).style.display = 'block';
            break;
        case 5:
            document.getElementById('text1').innerText = 'CASPER';
            document.getElementById('text2').innerText = 'IONIQ 5 N';
            document.getElementById(`carText${pageCnt}`).style.display = 'block';
            break;
        default:
            document.getElementById('text1').innerText = 'BRAND';
            document.getElementById('text2').innerText = 'The all-new SANTA FE';
            document.getElementById(`carText${pageCnt}`).style.display = 'block';

    }

}



leftBtn.addEventListener('click', () => {
    /*슬라이드 로직*/
    leftBtnClick()
})


rightBtn.addEventListener('click', () => {
    rightBtnClick()
})

/* 슬라이드 미니페이지 클릭 로직 */
function miniPageBtnClick(e) {
    if (e > pageCnt) { //right
        document.getElementById(`car${pageCnt}`).style.display = 'none';
        document.getElementById(`carText${pageCnt}`).style.display = 'none';
        document.getElementById(`page${pageCnt}`).innerText = '○';
        document.getElementById(`page${pageCnt}`).style.color = 'white';
        pageCnt = e;
        btnName()
        document.getElementById(`car${pageCnt}`).style.display = 'block';
        document.getElementById(`car${pageCnt}`).style.animationName = "move1";
        document.getElementById(`page${pageCnt}`).innerText = '●';
        document.getElementById(`page${pageCnt}`).style.color = 'rgb(10, 80, 156)';

    } else if (e < pageCnt) {
        document.getElementById(`car${pageCnt}`).style.display = 'none';
        document.getElementById(`carText${pageCnt}`).style.display = 'none';
        document.getElementById(`page${pageCnt}`).innerText = '○';
        document.getElementById(`page${pageCnt}`).style.color = 'white';
        pageCnt = e;
        btnName();
        document.getElementById(`car${pageCnt}`).style.display = 'block';
        document.getElementById(`car${pageCnt}`).style.animationName = "move2";
        document.getElementById(`page${pageCnt}`).innerText = '●';
        document.getElementById(`page${pageCnt}`).style.color = 'rgb(10, 80, 156)';
    } else {
        return;
    }

}



document.getElementById('bm4').addEventListener('mouseover', () => {
    document.getElementById('bm4Bgc').innerHTML = ` <div>
                            <h1>Technology</h1>
                            <h3>디지털 사이드 미러와 통합 디스플레이를 적용해 시인성과 편의성을 높였습니다.</h3>
                        </div>`;
    document.getElementById('bm4Bgc').style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
})

document.getElementById('bm4').addEventListener('mouseout', () => {
    document.getElementById('bm4Bgc').innerHTML = ``;
    document.getElementById('bm4Bgc').style.backgroundColor = '';
})


document.getElementById('bm6').addEventListener('mouseover', () => {
    document.getElementById('bm6Bgc').innerHTML = ` <div>
                            <h1>Driving</h1>
                            <h3>운전자의 니즈에 따라 만들어지는 IONIQ 6의 주행 감성을 즐겨보세요.</h3>
                        </div>`;
    document.getElementById('bm6Bgc').style.backgroundColor = 'rgb(0, 0, 0, 0.9)';
})

document.getElementById('bm6').addEventListener('mouseout', () => {
    document.getElementById('bm6Bgc').innerHTML = ``;
    document.getElementById('bm6Bgc').style.backgroundColor = '';
})


document.getElementById('bm7').addEventListener('mouseover', () => {
    document.getElementById('bm7Bgc').innerHTML = ` <div>
                            <h1>Travel</h1>
                            <h3>완전히 새로운 상품성과 차별화된 감성으로 <br>
                            일상과 아웃도어를 넘나드는 새로운 라이프를 제시합니다.</h3>
                        </div>`;
    document.getElementById('bm7Bgc').style.backgroundColor = 'rgb(0, 0, 0, 0.9)';
})

document.getElementById('bm7').addEventListener('mouseout', () => {
    document.getElementById('bm7Bgc').innerHTML = ``;
    document.getElementById('bm7Bgc').style.backgroundColor = '';
})




/****************************광고 슬라이더********************************/

let adLength = 0;
let adCnt = 0;
const adSlider = document.getElementById('adSlider');
document.getElementById('leftBtn2').addEventListener('click', () => {
    if (adCnt == 0) {
        adCnt = 0;
    } else {
        adCnt -= 633;
    }
    adSlider.style.transition = '1s';
    adSlider.style.marginLeft = `-${adCnt}px`;
    console.log(adCnt);
})


document.getElementById('rightBtn2').addEventListener('click', () => {
    if (adCnt == 1899) {
        adCnt = 1899;
    } else {
        adCnt += 633;
    }
    adSlider.style.transition = '1s';
    adSlider.style.marginLeft = `-${adCnt}px`;
    console.log(adCnt);
})



document.getElementById('adSlider1').addEventListener('mouseover', () => {
    document.getElementById('adtext1').style.display = "block";
    document.getElementById('adbgc1').style.display = "block";
})
document.getElementById('adSlider1').addEventListener('mouseout', () => {
    document.getElementById('adtext1').style.display = "none";
    document.getElementById('adbgc1').style.display = "none";
})







document.getElementById('adSlider2').addEventListener('mouseover', () => {
    document.getElementById('adtext2').style.display = "block";
    document.getElementById('adbgc2').style.display = "block";
})
document.getElementById('adSlider2').addEventListener('mouseout', () => {
    document.getElementById('adtext2').style.display = "none";
    document.getElementById('adbgc2').style.display = "none";
})
document.getElementById('adSlider3').addEventListener('mouseover', () => {
    document.getElementById('adtext3').style.display = "block";
    document.getElementById('adbgc3').style.display = "block";
})
document.getElementById('adSlider3').addEventListener('mouseout', () => {
    document.getElementById('adtext3').style.display = "none";
    document.getElementById('adbgc3').style.display = "none";
})
document.getElementById('adSlider4').addEventListener('mouseover', () => {
    document.getElementById('adtext4').style.display = "block";
    document.getElementById('adbgc4').style.display = "block";
})
document.getElementById('adSlider4').addEventListener('mouseout', () => {
    document.getElementById('adtext4').style.display = "none";
    document.getElementById('adbgc4').style.display = "none";
})
document.getElementById('adSlider5').addEventListener('mouseover', () => {
    document.getElementById('adtext5').style.display = "block";
    document.getElementById('adbgc5').style.display = "block";
})
document.getElementById('adSlider5').addEventListener('mouseout', () => {
    document.getElementById('adtext5').style.display = "none";
    document.getElementById('adbgc5').style.display = "none";
})
document.getElementById('adSlider6').addEventListener('mouseover', () => {
    document.getElementById('adtext6').style.display = "block";
    document.getElementById('adbgc6').style.display = "block";
})
document.getElementById('adSlider6').addEventListener('mouseout', () => {
    document.getElementById('adtext6').style.display = "none";
    document.getElementById('adbgc6').style.display = "none";
})










