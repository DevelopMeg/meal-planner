import React from "react";
import "../../scss/style.scss";

import Header from "./Header";
import RouteSections from "./RouteSections";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <main>
          <RouteSections />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
