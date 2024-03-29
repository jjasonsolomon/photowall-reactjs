import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Component/App'
import thunk from 'redux-thunk'
import {database} from './database/config'
//const element = React.createElement('strong',null,'Who Am I?');

//const about = ['Techie', 'Developer', 'Intrested in AI'];

const store = createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
