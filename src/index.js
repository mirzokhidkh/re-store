import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";

import App from './components/app/app';
import ErrorBoundary from "./components/error-boundary/error-boundary";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookstoreService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
    ,
    document.getElementById('root')
);
