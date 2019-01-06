import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Feature from './components/Feature';
import reducers from './reducers/index';

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)

ReactDom.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                <Route path="/" exact render={ () => <Welcome />} />
                <Route path="/signup" render={ () => <Signup />} />
                <Route path="/signin" render={ () => <Signin />} />
                <Route path="/feature" render={ () => <Feature />} />
                <Route path="/signout" render={ () => <Signout />} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
)