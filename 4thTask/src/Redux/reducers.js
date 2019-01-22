import {p1,p2,p3,p4,p5} from './../Users';

const initState = [p1,p2,p3,p4,p5];

export const users = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_USER': return[].concat(state, action.payload);
        default: return state;
    }
}

export const loading = (state= false, action) =>{
    switch(action.type){
        case 'START_LOADING': return true;
        case 'FINISH_LOADING':  return false;
        default: return state;
    }
}