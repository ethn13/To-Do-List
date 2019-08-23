import {elements} from './base';
import * as inputView from './views/inputView'
import {ToDo} from './models/ToDo';
import * as toDoView from './views/toDoView';
import {Doing} from './models/Doing';
import * as doingView from './views/doingView';
import { Done } from './models/Done';
import * as doneView from './views/doneView';

// Global App Controller

const state = {};

window.renderItem = toDoView.renderItem;
// Read storage

window.addEventListener('load', e => {
    // Read to-do part storage if there is some and render them
    state.toDo = new ToDo();
    state.toDo.readStorage();
    
    // Render to-do items
    state.toDo.items.forEach(el => {
        toDoView.renderItem(el.id, el.title, el.description);
    })
     

    // Read doing part storage if there is some and render them
    state.doing = new Doing();
    state.doing.readStorage();
    
    // Render doing items
    state.doing.items.forEach(el => {
        doingView.renderItem(el.id, el.title, el.description);
    })
     

    // Read done part storage if there is some and render them
    state.done = new Done();
    state.done.readStorage();
    
    // Render done items
    state.done.items.forEach(el => {
        doneView.renderItem(el.id, el.title, el.description);
    })
    
    // Clock
    showClock();
    
})

const addZero = (i) => {
    if(i < 10) {
        return `0${i}`;
    }
    return i;
}

const showClock = () => {
    let hour, minute, second;
    hour = addZero(new Date().getHours());
    minute = addZero(new Date().getMinutes());
    second = addZero(new Date().getSeconds());
    elements.clock.textContent = `${hour}:${minute}:${second}`;

    setTimeout(showClock, 1000);
}

// To-do part controller

const controlToDo = () => {
    // Get to-do item title and description
    const title = inputView.getInputTitle();
    const description = inputView.getInputDescription();
    if(title && description) {
        // Create new ToDo object if there is none
        if(!state.toDo){
            state.toDo = new ToDo();
        }
        
        // Add to-do item
        const newItem = state.toDo.addItem(title, description);

        // Clear input form(關閉to do list 表單並清空其中value)
        inputView.clearForm();
        
        // Render to-do item
        toDoView.renderItem(newItem.id, newItem.title, newItem.description);
       
    }
   
}

// Doing part controller

const controlDoing = (item) => {
    //  Create new Doing object if there is none
    if(!state.doing) {
        state.doing = new Doing();
    }

    // 將此item加入到Doing object裡面
    const newItem = state.doing.addItem(item.id, item.title, item.description);
    
    // Render item to UI (Doing part)
    doingView.renderItem(newItem.id, newItem.title, newItem.description);
}

// Done part controller

const controlDone = (item) => {
    if(!state.done) {
        state.done = new Done();
    }

    // 將此item加入到Done object裡面
    const newItem = state.done.addItem(item.id, item.title, item.description);

    // Render item to UI (Done part)
    doneView.renderItem(newItem.id, newItem.title, newItem.description);
}


elements.toDoField.addEventListener('click', (e) => {
    if(e.target.matches('.remove-to-do__item, .remove-to-do__item *')) {    
        const itemId = e.target.closest('li').dataset.id;
        // Remove item from UI
        toDoView.removeToDo(itemId);

        // Delete item from data(to-do object裡面)
        state.toDo.deleteItem(itemId);


    }else if(e.target.matches('.next-to-do__item, .next-to-do__item *')) {
        const itemId = e.target.closest('li').dataset.id;
        // Remove item from UI
        toDoView.removeToDo(itemId);
        
        // Delete item from data(to-do object裡面)，且回傳此item
        const item = state.toDo.deleteItem(itemId);

        // Doing controller
        controlDoing(item);

    }
})

elements.doingField.addEventListener('click', (e) => {
    
    if(e.target.matches('.remove-doing__item, .remove-doing__item *')) {
        const itemId = e.target.closest('li').dataset.id;
        // Remove item from UI
        doingView.removeDoing(itemId);

        // Delete item from data(doing object裡面)
        state.doing.deleteItem(itemId);

    }else if(e.target.matches('.prev-doing__item, .prev-doing__item *')) {
        const itemId = e.target.closest('li').dataset.id;
        // Remove item from UI
        doingView.removeDoing(itemId);

        // Delete item from data(doing object裡面)
        const item = state.doing.deleteItem(itemId);

        // to-do object重新取得item
        state.toDo.regainItem(item.id, item.title, item.description);

        // Render item on UI (to-do part)
        toDoView.renderItem(item.id, item.title, item.description);


    }else if(e.target.matches('.next-doing__item, .next-doing__item *')) {
        const itemId = e.target.closest('li').dataset.id;
        // Remove item from UI
        doingView.removeDoing(itemId);

        // Delete item from data(doing object裡面)
        const item = state.doing.deleteItem(itemId);

        // Done part controller
        controlDone(item);


    }
})


elements.doneField.addEventListener('click', (e) => {
    if(e.target.matches('.finish-done__item, .finish-done__item *')) {
        const itemId = e.target.closest('li').dataset.id;
        // Remove item from UI(done part)
        doneView.removeDone(itemId);

        // Delete item from data(done object裡面)
        state.done.deleteItem(itemId);

    }else if(e.target.matches('.prev-done__item, .prev-done__item *')) {
        const itemId = e.target.closest('li').dataset.id;
        // Remove item from UI(done part)
        doneView.removeDone(itemId);

        // Delete item from data(done object裡面)
        const item = state.done.deleteItem(itemId);

        // doing object重新取得item
        state.doing.regainItem(item.id, item.title, item.description);

        // Render item on UI(doing part)
        doingView.renderItem(item.id, item.title, item.description);

    }
})


elements.inputForm.addEventListener('submit', (e) => {
    // to-do controller
    controlToDo();
})


elements.inputBtn.addEventListener('click', (e) => {
    // Render input form
    inputView.renderForm();
});

elements.inputCloseBtn.addEventListener('click', (e) => {
    // Clear input form
    inputView.clearForm();
})

