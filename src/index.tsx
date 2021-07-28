import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import getFirebase from '../firebase';
import StorageProvider from '@src/components/StorageProvider';
import ErrorBoundary from './components/ErrorBoundary';

export const firebaseInstance = getFirebase();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <StorageProvider>
                <App />
            </StorageProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root') || document.createElement('div')
);