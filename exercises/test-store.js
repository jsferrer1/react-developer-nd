import store from './store'

// example
store.getState(); // []
store.dispatch(receiveComment('Redux is great!'));
store.getState(); // ['Redux is great!']