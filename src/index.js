import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

const initialState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    default: 
      return state;

  }

}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});



console.log(store.getState());

//let state = reducer(undefined, {type: 'INC'});
//state = reducer(state, {type: 'INC'});
//state = reducer(state, {type: 'INC'});
//state = reducer(state, {type: 'INC'});
//console.log(state);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <>
    </>
  </React.StrictMode>
);



