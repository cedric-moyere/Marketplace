import React from "react";
import Products from "./products/";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";

const Admin = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="col" style={{ marginTop: "140px" }}>
      <Link to={`${url}/products`} className="btn btn-primary">
        Products
      </Link>
      <Link to={`${url}/users`} className="btn btn-primary">
        Users
      </Link>
      <Switch>
        <Route path={`${path}/products`}>
          <Products />
        </Route>
        <Route path={`${path}/users`}>
          <div>USERS</div>
        </Route>
      </Switch>
    </div>
  );
};
export default Admin;
