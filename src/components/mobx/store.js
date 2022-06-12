import {makeObservable, observable, action, autorun} from './index';

class Store {
    count = 0;
    obj = {
        node: {
            node: {
                name: ''
            }
        }
    };
    increase() {
        this.count+=1;
    }
    reset() {
        this.count = 1;
    }
    constructor() {
        makeObservable(this, {
            obj: observable.shallow,
            count: observable,
            increase: action,
            reset: action
        })
        autorun(() => {
            console.log(this.count)
        })
    }
}

export default new Store();