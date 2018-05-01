import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux';
import {createStore} from 'redux';

function playList(state = [] , action) {

    console.log('action: ',action);

    if (action.type = 'addTrack'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;

}

const store = createStore( playList );

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
