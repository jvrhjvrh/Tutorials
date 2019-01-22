import {createStore, applyMiddleware, combineReducers} from 'redux'
import {users, loading} from './reducers';
import {thunk} from 'thunk';

export let store = createStore(combineReducers(users,loading), applyMiddleware(thunk));