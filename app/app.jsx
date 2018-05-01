/*var ReactDOM = require('react-dom');
var React = require('react');*/

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

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe( () => {
    console.log('subscribe: ',store.getState());
    list.innerHTML = '';
    trackInput.value='';
    store.getState().forEach( track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    })

});

store.dispatch({
    type: 'addTrack',
    payload: 'red cold river'
});



addTrackBtn.addEventListener('click', ()=> {
    const trackName = trackInput.value;
    console.log('trackName: ',trackName);
    store.dispatch({
        type: 'addTrack',
        payload: trackName
    });
});