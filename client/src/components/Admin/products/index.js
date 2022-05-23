import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { fetchProducts } from "../../../lib/state/actions/products";
import Create from "./create";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({ ...state.products }));
  React.useEffect(() => {
    if (!state.items[0]) {
      dispatch(fetchProducts());
    }
  }, [state.isLoading]);
  const data = React.useMemo(() => state.items[0], [state.isLoading]) || [{}];
  const columns = React.useMemo(
    () =>
      Object.getOwnPropertyNames(data[0])
        .filter((name) => !name.includes("_"))
        .map((c) => {
          return { Header: `${c[0].toUpperCase()}${c.slice(1)}`, accessor: c };
        }),
    [state.isLoading]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      autoResetHiddenColumns: false,
      autoResetSortBy: false,
      autoResetPage: false,
    },
    useSortBy
  );
  const { path, url } = useRouteMatch();
  return (
    <div className="col" style={{ marginTop: "140px" }}>
      <Switch>
        <Route exact path={`${path}`}>
          <Link to={`${url}/create`}>
            <button className="btn btn-primary">Create</button>
          </Link>
          <table {...getTableProps()} className="table table-bordered table-striped table-hover">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {column.render("Header")}
                      <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : " 🔽"}</span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            textAlign: "center",
                          }}
                        >
                          {cell.value === true ? " ✅" : cell.value === false ? " ❌" : cell.value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Route>
        <Route path={`${path}/create`}>
          <Create />
        </Route>
      </Switch>
    </div>
  );
};
export default Products;
