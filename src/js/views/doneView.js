import {elements} from '../base';

export const renderItem = (id, title, description) => {
    const markup = `
    <li class="done__item" data-id="${id}">
        <div class="done__item-content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <div class="done__item-btns">
            <button class="btn-tiny finish-done__item">
                <i class="fas fa-check-circle"></i>
            </button>
            <button class="btn-tiny prev-done__item">
                <i class="fas fa-chevron-circle-left"></i>
            </button>
        </div>
    </li> 
    `;
    elements.doneList.insertAdjacentHTML('beforeend', markup);
}

export const removeDone = (id) => {
    const item = document.querySelector(`li[data-id="${id}"]`);
    item.parentElement.removeChild(item);
}