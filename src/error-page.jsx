import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Some error might be occurred.</p>
      <p className="err-text">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <button className="err-btn">Go Back</button>
      </Link>
    </div>
  );
}