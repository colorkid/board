import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import getFirebase from '../firebase';
import StorageProvider from '@src/components/StorageProvider';

export const firebaseInstance = getFirebase();

ReactDOM.render(
    <Provider store={store}>
        <StorageProvider>
            <App />
        </StorageProvider>
    </Provider>,
    document.getElementById('root') || document.createElement('div')
);