import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Navbar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Popular from "./components/popular/Popular";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataReducer } from "./store/reducers/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  apiData: dataReducer
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Banner />
        <Popular />
      </Provider>
    </div>
  );
}
