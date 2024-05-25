import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { logInByGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleFormLogin = (e) => {
    e.preventdefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Login successfully!");
    const loginFormData = { email, password };
    console.log(loginFormData);
  };
  //   google login
  const handleGoogleLogin = () => {
    logInByGoogle()
      .then((res) => {
        console.log(res);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleFormLogin} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-primary">
              Google
            </button>
            <ToastContainer />;
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
