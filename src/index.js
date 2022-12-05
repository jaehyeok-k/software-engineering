import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './redux/reducers';
import app from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <Router >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);