import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { fetchProducts } from "../../../lib/state/actions/products";
import Create from "./create";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import EnhancedTable from "../../Shared/EnhancedTable";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => ({ ...state.products }));
  const items = state.items[0]?.map((r) => {
    return {
      name: r.name,
      description: r.description,
      price: r.price,
      inStock: r.inStock,
      imageUrl: r.imageUrl,
      category: r.category,
    };
  });
  React.useEffect(() => {
    if (!state.items[0]) {
      dispatch(fetchProducts());
    }
  }, [state.isLoading]);
  const data = React.useMemo(() => items, [state.isLoading]) || [{}];
  console.log("------------------------------");
  console.log(data);
  const columns = [
    {
      id: 0,
      label: "Name",
      numeric: false,
      disablePadding: true,
    },
    {
      id: 1,
      label: "Description",
      numeric: false,
      disablePadding: true,
    },
    {
      id: 2,
      label: "Price",
      numeric: true,
      disablePadding: false,
    },
    {
      id: 3,
      label: "InStock",
      numeric: false,
      disablePadding: true,
    },
    {
      id: 4,
      label: "ImageUrl",
      numeric: false,
      disablePadding: true,
    },
    {
      id: 5,
      label: "Category",
      numeric: false,
      disablePadding: true,
    },
  ];
  console.log(columns);
  console.log("------------------------------");

  const { path, url } = useRouteMatch();
  return (
    <div className="col mt-2">
      <EnhancedTable rows={data} columns={columns} />
      <Link to={`${url}/create`}>
        <button className="btn btn-primary">Create</button>
      </Link>
      <Switch>
        <Route exact path={`${path}`}>
          {/* <table {...getTableProps()} className="table table-bordered table-striped table-hover">
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
          </table> */}
        </Route>
        <Route path={`${path}/create`} component={Create} />
      </Switch>
    </div>
  );
};
export default Products;
