import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { fetchProducts } from "../../lib/state/actions/products";
import Products from "./products/";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({ ...state.products }));
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const data = React.useMemo(() => state.items[0], [state]) || [{}];
  const columns = React.useMemo(
    () =>
      Object.getOwnPropertyNames(data[0])
        .filter((name) => !name.includes("_"))
        .map((c) => {
          return { Header: `${c[0].toUpperCase()}${c.slice(1)}`, accessor: c };
        }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  console.log(getTableProps());
  const { path, url } = useRouteMatch();

  return (
    <div className="col" style={{ marginTop: "140px" }}>
      <Link to={`${url}/products`} className="btn btn-primary">Products</Link>
      <Link to={`${url}/users`} className="btn btn-primary">Users</Link>
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
