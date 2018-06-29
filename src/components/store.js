import { combineReducers ,createStore } from 'redux';

export const StoreCommands = {
    BASKET_VISIBILITY : 'BASKET_VISIBILITY'
}

const active_view_reducer = (state = [true], action) => {
    switch (action.type) {
        case StoreCommands.BASKET_VISIBILITY:
            let new_state = [];
            new_state = action.payload; 
          return new_state;
        default:         
          return state;
    }
};

const reducers = combineReducers({
    active_view: active_view_reducer,
});

// const persistedState = {}
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

export default createStore(reducers,persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

