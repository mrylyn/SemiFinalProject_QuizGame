const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const main = document.querySelector('.main');
const exitBtn = document.querySelector('.exit');
const home = document.querySelector('.home-content');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove ('active');
}