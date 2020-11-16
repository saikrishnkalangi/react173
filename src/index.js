import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter'
import { Provider } from 'react-redux';
import { createStore} from 'redux'
import Routings from './components/Routings.js'

import PostReducer from './Reducer/PostReducer';
import thunk from 'redux-thunk';






ReactDOM.render(
    <Routings />
 ,document.getElementById('root'));



