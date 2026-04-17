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
}