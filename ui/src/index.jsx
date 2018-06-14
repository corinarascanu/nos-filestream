import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from "./root/components/App";

ReactDOM.render(
  <BrowserRouter>
    <div>
      test
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
