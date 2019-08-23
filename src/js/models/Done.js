export class Done {
    constructor() {
        this.items = [];
    }

    addItem(id, title, description) {
        const item = {
            id,
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
        localStorage.setItem('done', JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('done'));
        if(storage) {
            this.items = storage;
            return true;
        }
    }
}