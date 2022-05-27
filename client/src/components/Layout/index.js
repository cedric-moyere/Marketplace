import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import BreadCrumbs from "./BreadCrumbs";

const Layout = ({ children }) => (
  <Router>
    <div style={{ height: "auto", overflow: "auto" }}>
      <div className="fixed-top">
        <Header />
        <Nav />
        <BreadCrumbs />
      </div>
      {children}
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  </Router>
);
export default Layout;
