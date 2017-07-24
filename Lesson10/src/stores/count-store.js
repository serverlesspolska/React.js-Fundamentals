import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher'
import {EventEmitter} from 'events'

// backing variables
let _count = 0

let getCount = () => {
    return _count
}
let incrementCount = () => {
    _count = _count + 1
}


// define store

const EVENT = 'CHANGE_EVENT'

export let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,
    emitChange: function () {
        console.log(`emitting event ${EVENT}`)
        this.emit(EVENT)
    },
    addChangeListener: function (callback) {
        console.log('Adding change listener')
        this.on(EVENT, callback)
    },
    removeListener: function (callback) {
        this.removeListener(EVENT, callback)
    }
});


// register with dispatcher
dispatcher.register(action => {
    console.log(`Inside callback dispatcher function. Action type: ${action.actionType}`)
    switch (action.actionType) {
        case constants.INCREMENT:
            incrementCount()
            TodoStore.emitChange()
            break;
    }
})