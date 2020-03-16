/**
 * Keeps a record of all the food input from the client. This class
 * will thus be responsible for handling the client and be 
 * the bridge between the client and the view. This is however
 * not a controller but a part of the model as it communicates with 
 * the client.
 * 
 * @author Netanel Avraham Eklind
 * @version 2020-03-16 -> Implement basic store with redux. 
 */
import * as Redux from 'redux'
import Observable from './Observable';

class Store extends Observable {
    constructor() {
        this.store = Redux.createStore(Redux.combineReducers(reducers))
    }

    notifyObserver() {
        this._observer.map(observer => observer.update(this));
    }

}

const foodList = (state = [], actions) => {

    switch (actions) {
        case "ADD_FOOD":
            return [...state.slice(0, actions.index),
            actions.item,
            ...state.slice(actions.index)
            ]
        default:
            return state;
    }
}

const reducers = {
    foodList
};