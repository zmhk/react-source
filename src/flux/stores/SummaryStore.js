
import EventEmitter from 'events'
import Dispatcher from '../dispatch'
import * as actionTypes from "../actionType"
import CounterStore from './CounterStore'

const CHANGE_EVENT = "changed"
function computeSumrnary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummmary: function () {
        return computeSumrnary(CounterStore.getCounterValues());
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

SummaryStore.dispatcherToken = Dispatcher.register((action) => {
    if (action.type == actionTypes.INCREMENT || action.type == actionTypes.DECREMENT) {
        Dispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
})

export default SummaryStore