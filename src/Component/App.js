import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../assets/normalize.css";
import './style.scss';

import { TopNavigation } from "./Common/TopNavigation";
import { Footer } from "./Common/Footer";
import { requesScenicSpot } from "../controller/apiManager";
import Homepage from "../Router/Homepage/index";
import SearchResult from "../Router/SearchResult/index";
import ViewDetail from "../Router/ViewDetail/index";
// import ScrollToTop from "./ScrollToTop";

// export const basename = process.env.isProd ? "/F2E-2021_trip" : "/";
// console.log(basename);

const App = () => {
  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <TopNavigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path={`/:searchKind/search-result`} component={SearchResult} />
          <Route path={`/:searchKind/view/:id`} component={ViewDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;

