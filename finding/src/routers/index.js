import React from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import App from "../App"
import Home from "../components/home";

// import App from "../components/App";
// import NotFound from "../components/NotFound";
// import Result from "../components/Result";
// import ErrorNotification from "../components/ErrorNotification";

export default function Routers() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
            {/* <Route exact path="/result" component={Result}/>
            <Route exact path="/error" component={ErrorNotification}/>
            <Route exact component={NotFound}/> */}
        </Routes>
    </BrowserRouter>
  );
}

