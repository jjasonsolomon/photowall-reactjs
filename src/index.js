import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Component/App'
//const element = React.createElement('strong',null,'Who Am I?');

//const about = ['Techie', 'Developer', 'Intrested in AI'];

const store = createStore (rootReducer)


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
