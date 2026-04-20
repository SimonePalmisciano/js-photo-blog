// @ts-check
'use strict';

const API_URL = 'https://lanciweb.github.io/demo/api/pictures/';

const cardContainerElem = document.querySelector('#cardContainer');
const loadingMsgElem = document.querySelector('#loading');
const errorMsgElem = document.querySelector('#errorDescription');

if (loadingMsgElem !== null && errorMsgElem !== null) {

    loadingMsgElem.innerHTML = 'Caricamento';
    fetch(API_URL)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData);
            renderPhotoCards(jsonData);
        })
        .catch(error => {
            console.error(error);
            errorMsgElem.innerHTML = error;

        })
        .finally(() => {
            console.log('è tutto finito stai traquillo');
            loadingMsgElem.innerHTML = '';

        })
};

const modalOverlay = document.querySelector('#modalOverlay');
const modalCloseBtn = document.querySelector('#modalCloseBtn');
const modalImage = document.querySelector('#modalImage');

if (cardContainerElem !== null) {
    cardContainerElem.addEventListener('click', (event) => {
        const target = event.target

        const cardEl = target.closest('.card');

        if (!cardEl || !cardEl.contains(target)) {
            return;
        }

        console.log(target);
        
    })
}
