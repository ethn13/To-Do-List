import {elements} from '../base';

export const renderItem = (id, title, description) => {
    const markup = `
    <li class="doing__item" data-id="${id}">
        <div class="doing__item-content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <div class="doing__item-btns">
            <button class="btn-tiny remove-doing__item">
                <i class="fas fa-times-circle"></i>
            </button>
            <button class="btn-tiny prev-doing__item">
                <i class="fas fa-chevron-circle-left"></i>
            </button>
            <button class="btn-tiny next-doing__item">
                <i class="fas fa-chevron-circle-right"></i>
            </button>
        </div>
    </li> 
    `;
    elements.doingList.insertAdjacentHTML('beforeend', markup);
}

export const removeDoing = (id) => {
    const item = document.querySelector(`li[data-id="${id}"]`);
    item.parentElement.removeChild(item);
}