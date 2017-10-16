/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {AppContainer} from 'react-hot-loader';
import rootReducer from './rootReducer';
const store=createStore(
        rootReducer,
compose(
        applyMiddleware(thunk),
        window.devToolsExtension?window.devToolsExtension():f=>f
        )
        );
render(<Provider store={store}>
        <BrowserRouter>
<Routes/>
</BrowserRouter></Provider>, document.getElementById('app'));
if(module.hot){
    module.hot.accept()
}