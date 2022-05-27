import React from "react";
import Products from "./products";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Users from "./users";

const Admin = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="col" style={{ marginTop: "140px" }}>
      <div className="p-2">
        <Link to={`${path}/products`} className="btn btn-primary">
          Products
        </Link>
        <Link to={`${path}/users`} className="btn btn-primary">
          Users
        </Link>
      </div>
      <Route path={`${path}/products`} component={Products} />
      <Route path={`${path}/users`} component={Users} />
    </div>
  );
};
export default Admin;
