import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import formReducer from './components/redux/reducer.js';
import movieReducer from './components/redux/moviereducer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
const reducerForm = combineReducers({
  form: formReducer,
   movie: movieReducer 
});

const store = configureStore({
  reducer: reducerForm,
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
