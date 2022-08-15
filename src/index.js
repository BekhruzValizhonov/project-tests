import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Tests from "./Components/Tests";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const AllComponents = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tests" element={<Tests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AllComponents />
  </Provider>
);
