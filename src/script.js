const productContainers = [...document.querySelectorAll('.product-container1')];
const miniitemslider = [...document.querySelectorAll('.miniitemslider')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
const preBtn = [...document.querySelectorAll('.pre-btn2')];
const minisliderbtn1 = [...document.querySelectorAll('.minisliderbtn1')];
const minisliderbtn2 = [...document.querySelectorAll('.minisliderbtn2')];

const menuBtn = document.querySelector('.menuBtn')
const miniNav = document.querySelector('.miniNav')
const menuBtnClose = document.querySelector('.menuBtnClose')

const miniLchangeBtn = document.querySelector('.miniLchangeBtn')
const miniLaddChangeBtn = document.querySelector('.miniLaddChangeBtn')
const miniRchangeBtn = document.querySelector('.miniRchangeBtn')
const miniRaddChangeBtn = document.querySelector('.miniRaddChangeBtn')

const LchangeBtn = document.querySelector('.LchangeBtn')
const LaddChangeBtn = document.querySelector('.LaddChangeBtn')
const RchangeBtn = document.querySelector('.RchangeBtn')
const RaddChangeBtn = document.querySelector('.RaddChangeBtn')


const navMenuItems = document.getElementById('navMenuWhapper')
const navs = navMenuItems.getElementsByClassName('navMenuItem')


for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activeMenu");
        current[0].className = current[0].className.replace(" activeMenu", "");
        this.className += " activeMenu";
    });
}


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        if (i = -(containerWidth - 148) && -(containerWidth), (item.scrollLeft -= containerWidth) === i) {
            LchangeBtn.classList.remove('miniNavMenuClose')
            LaddChangeBtn.classList.remove('miniNavMenu')

        }
        if (i = containerWidth * 2, (item.scrollLeft -= containerWidth) != i) {
            RchangeBtn.classList.remove('miniNavMenu')
            RaddChangeBtn.classList.remove('miniNavMenuClose')
        }
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        console.log(item.scrollLeft += containerWidth);

        if (i = containerWidth, (item.scrollLeft += containerWidth) === i) {
            LchangeBtn.classList.add('miniNavMenuClose')
            LaddChangeBtn.classList.add('miniNavMenu')
        }
        if (i = containerWidth * 2, item.scrollLeft += containerWidth == i) {
            RchangeBtn.classList.add('miniNavMenu')
            RaddChangeBtn.classList.add('miniNavMenuClose')
        }

    })

})

miniitemslider.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    minisliderbtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        if (i = 0, (item.scrollLeft -= containerWidth) === i) {
            miniLaddChangeBtn.classList.remove('miniNavMenu')
            miniLchangeBtn.classList.remove('miniNavMenuClose')
        }
        if (i = containerWidth, (item.scrollLeft -= containerWidth) === i) {
            miniRchangeBtn.classList.remove('miniNavMenu')
        }
        if (i = containerWidth, (item.scrollLeft -= containerWidth) === i) {
            miniRaddChangeBtn.classList.remove('miniNavMenuClose')
        }

    })
    minisliderbtn2[i].addEventListener('click', () => {

        item.scrollLeft += containerWidth;

        if (i = 0, (item.scrollLeft += containerWidth) > i) {
            miniLaddChangeBtn.classList.add('miniNavMenu')
            miniLchangeBtn.classList.add('miniNavMenuClose')
        }
        if (i = containerWidth * 2, item.scrollLeft += containerWidth == i) {
            miniRaddChangeBtn.classList.add('miniNavMenuClose')
            miniRchangeBtn.classList.add('miniNavMenu')
        }
    })
})

menuBtn.addEventListener('click', () => {
    // menuBtnClose btn add 
    menuBtnClose.classList.add('miniNavMenu')
    // menuBtn btn remove
    menuBtn.classList.add('miniNavMenuClose')
    // miniNav menu add
    miniNav.classList.add('miniNavMenuHiden')
})

menuBtnClose.addEventListener('click', () => {
    // menuBtn btn add
    menuBtn.classList.remove('miniNavMenuClose')
    // menuBtnClose btn reomove
    menuBtnClose.classList.remove('miniNavMenu')
    // miniNav menu remove
    miniNav.classList.remove('miniNavMenuHiden')

})
