import uniqid from 'uniqid';

export class ToDo {
    constructor() {
        this.items = [];
    }

    addItem(title, description) {
        const item = {
            id: uniqid(),
            title,
            description
        };
        this.items.push(item);
        this.persistData();
        return item;
    }

    deleteItem(id) {
        const ind = this.items.findIndex(el => el.id === id);
        const target = this.items[ind];
        this.items.splice(ind, 1);
        this.persistData();
        return target;
    }

    regainItem(id, title, description) {
        const item = {
            id,
            title,
            description
        }
        this.items.push(item);
        this.persistData();
        return item;
    }

    persistData() {
        localStorage.setItem('to-do', JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('to-do'));
        if(storage) {
            this.items = storage;
            return true
        }
    }
}