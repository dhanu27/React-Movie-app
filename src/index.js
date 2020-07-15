import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store=createStore(movies);
// console.log("store",store);
// console.log("state",store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman',}]
// });
ReactDOM.render(<App  store={store}/>, document.getElementById('root'));



