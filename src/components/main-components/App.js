import React from "react";
import Header from "./Header";
import RouteSections from "./RouteSections";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <RouteSections />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
