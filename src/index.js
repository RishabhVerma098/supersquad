import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import rootReducers from "./reducers";
import { addCharaterById } from "./actions";

const store = createStore(rootReducers);
// seeing what is in the state for now
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addCharaterById(2));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
