import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const pathName = useLocation().pathname;
  const Component = () => {
    const breadCrumbs = pathName.split("/");
    breadCrumbs.pop();
    const key = useLocation().key;
    return (
      <nav>
        <ol className="breadcrumb">
          {breadCrumbs.map((p, i) => {
            const currPath = breadCrumbs.filter((_, j) => j <= i).join("/");
            return (
              <li key={p + key} className="breadcrumb-item">
                <Link to={currPath}>{p || "Home"}</Link>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };

  return pathName !== "/" ? <Component /> : <></>;
};
export default BreadCrumbs;
