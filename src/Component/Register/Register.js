import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signUpError, setSignUpError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="form-main ">
      <div className="login ">
        <h4 className="text-center mt-3 mb-4">Register</h4>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="mb-4">
            <label className="form-label">
              User name<sup className="text-danger">*</sup>
            </label>
            <input
              type="name"
              className="form-control"
              placeholder="User name"
              {...register("name", {
                required: "Username is required",
              })}
            />
            {errors.name && (
              <p className="text-danger mt-1">{errors.name?.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="form-label">
              Email address<sup className="text-danger">*</sup>
            </label>
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
            <label className="form-label">
              Password<sup className="text-danger">*</sup>
            </label>
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
            value="Sign Up"
          />
          {signUpError && <p className="text-danger mt-1">{signUpError}</p>}
          <p className="mt-2">
            Already Have An Account?{" "}
            <Link className="text-primary" to="/login">
              {" "}
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
