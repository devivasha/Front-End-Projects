import React from 'react';
import { Provider } from 'react-redux'
import * as serviceWorker from './service/serviceWorker';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from './containers/App';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
