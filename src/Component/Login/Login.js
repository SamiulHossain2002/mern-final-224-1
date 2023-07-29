import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className="form-main ">
      <div className="login ">
        <h4 className="text-center mt-3 mb-4">Login</h4>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", {
                required: "Email address is required",
              })}
            />
            {errors.email && (
              <p className="text-danger mt-1">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password", {
                required: "Valid password is required",
                minLength: {
                  value: 6,
                  message: "Password must be minimum 6 characters or more",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger mt-1">{errors.password?.message}</p>
            )}

            <small className="mt-5">Forget password?</small>
          </div>
          <input
            className="btn btn-secondary w-100 mt-2"
            type="submit"
            value="Sign In"
          />
          {loginError && <p className="text-danger mt-1">{loginError} </p>}

          <p className="mt-2">
            New to Doctors House?{" "}
            <Link className="text-primary" to="/register">
              {" "}
              Create new account
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
