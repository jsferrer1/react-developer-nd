// store.js
import { createStore } from 'redux';
import reducer from '../reducers/reducer';

let store = createStore(reducer);

const receiveComment = comment => ({
  type: 'RECEIVE_COMMENT',
  comment
});

store.getState(); // []
store.dispatch(receiveComment('Redux is great!'));
store.getState(); // ['Redux is great!']

export default store;