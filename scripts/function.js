// @ts-check
'use strict';

/** * @param {{'id': number, 'title':string, 'date':string, 'url':string}[]} photos */
function renderPhotoCards (photos) {
    for (const elem of photos) {
        const image = elem.url;
        const title = elem.title;
        const date = elem.date;
        
        // bisogna creare le prima le card
        const divCard = document.createElement('div');
        divCard.classList.add('card');
    
        const divHead = document.createElement('div');
        divHead.classList.add('card-head');
        divHead.innerHTML = `<img src="${image}" alt="${title}">`;
    
        const divBody = document.createElement('div');
        divBody.classList.add('card-body');
    
        const cardTitle = document.createElement('h5');
        const cardText = document.createElement('p');
        cardTitle.innerHTML = title;
        cardText.innerHTML = date;
        divBody.appendChild(cardTitle);
        divBody.appendChild(cardText);
    
        divCard.appendChild(divHead);
        divCard.appendChild(divBody);
    
        if (cardContainerElem !== null) {
            cardContainerElem.appendChild(divCard);
            
        }

    }
    

}