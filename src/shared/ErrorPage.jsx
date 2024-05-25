import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2>Page Note Found</h2>
      <Link to={"/"}>
        <button className="btn btn-accent">Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
