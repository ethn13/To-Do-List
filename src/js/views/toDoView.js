import {elements} from '../base';

export const renderItem = (id, title, description) => {
    const markup = `
    <li class="to-do__item" data-id="${id}">
        <div class="to-do__item-content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <div class="to-do__item-btns">
            <button class="btn-tiny remove-to-do__item">
                <i class="fas fa-times-circle"></i>
            </button>
            <button class="btn-tiny next-to-do__item">
                <i class="fas fa-chevron-circle-right"></i>
            </button>
        </div>
    </li>
    `;
    elements.toDoList.insertAdjacentHTML('beforeend', markup);
}

export const removeToDo = (id) => {
    const item = document.querySelector(`li[data-id="${id}"]`);
    item.parentElement.removeChild(item);
}