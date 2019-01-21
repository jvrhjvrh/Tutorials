import {createStore} from 'redux'
import {users} from './reducers';

export let store = createStore(users);