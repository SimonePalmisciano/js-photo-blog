// @ts-check
'use strict';

const API_URL = 'https://lanciweb.github.io/demo/api/pictures/';

const cardContainerElem = document.querySelector('#cardContainer');

if (cardContainerElem !== null) {
    fetch(API_URL)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData);
        })
        .catch(error => {
            console.error(error);
            
        });
}