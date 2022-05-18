import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { fetchProducts } from "../../../lib/state/actions/products";

const ProductsDataTable = () => {
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

  return (
    <div className="col" style={{ marginTop: "140px" }}>
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
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsDataTable;
