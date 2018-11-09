import EventEmitter from 'events'
import Dispatcher from '../dispatch'
import * as actionTypes from "../actionType"

const CHANGE_EVENT = "changed"

const counterValues = {
    "First": 0,
    "Second": 10,
    "Third": 30,
}

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function () {
        return counterValues
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

CounterStore.dispatchToken = Dispatcher.register((action) => {
    if (action.type == actionTypes.INCREMENT) {
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    } else if (action.type == actionTypes.DECREMENT) {
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
})

export default CounterStore