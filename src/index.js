import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Component/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
//const element = React.createElement('strong',null,'Who Am I?');

//const about = ['Techie', 'Developer', 'Intrested in AI'];





ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
