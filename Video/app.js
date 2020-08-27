'use strict'
let eventLike = document.querySelectorAll('.like');
let eventDisLike = document.querySelectorAll('.dislike');
let countLike = 0;
let countDisLike = 0;

eventLike.forEach((element) => {
    element.addEventListener('click', sorce);
});

eventDisLike.forEach((element) => {
    element.addEventListener('click', sorce);
}); 


/* function addLike(event) {
    let likeEl = event.target;
    let parent = event.target.parentNode;
    let zeroThumb = likeEl.classList.contains('far');
    if (zeroThumb) {
        likeEl.classList.remove('far');
        likeEl.classList.add('fas');
        countLike++;
    } else {
        countLike++;
    }  

    parent.querySelector('.score').textContent = countLike;
}

function addDisLike(event) {
    let disLikeEl = event.target;
    let parent = event.target.parentNode;
    let zeroThumb = disLikeEl.classList.contains('far');
    if (zeroThumb) {
        disLikeEl.classList.remove('far');
        disLikeEl.classList.add('fas');
        countDisLike++;
    } else {
        countDisLike++;
    }  

    parent.querySelector('.score').textContent = countDisLike;
} */

function sorce(event) {
    let disLikeEl = event.target;
    let parent = event.target.parentNode;
    let zeroThumb = disLikeEl.classList.contains('far');
    if (zeroThumb) {
        disLikeEl.classList.remove('far');
        disLikeEl.classList.add('fas');
    }  

    if (disLikeEl.classList.contains('dislike')) {
        countDisLike++;
        parent.querySelector('.score').textContent = countDisLike;
    } else {
        countLike++;
        parent.querySelector('.score').textContent = countLike;
    }

}
