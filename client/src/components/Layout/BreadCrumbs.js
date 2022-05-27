import { Link, useLocation, useRouteMatch } from "react-router-dom";
const BreadCrumbs = () => {
  const { path, url } = useRouteMatch();
  const pathName = useLocation().pathname;
  const breadCrumbs = pathName.split("/");
  breadCrumbs.pop();
  const key = useLocation().key;
  return pathName !== "/" ? (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadCrumbs.map((p) => {
          return (
            <li key={p + key} className="breadcrumb-item">
              <Link to={"/" + p || "/"}>{p || "Home"}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  ) : (
    <></>
  );
};
export default BreadCrumbs;
