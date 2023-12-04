import React from "react";
import "./login-form.css";
import { FaLock } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const [cookies, setCookie] = useCookies(['token']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setCookie('token', 'mher', { path: '/', maxAge: 3600 });
    window.location = 'localhost:3001'
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Մուտք գործել</h2>
        <div className="lg-inpt">
          <IoMail className="login-icon" />
          <input
            type="text"
            placeholder="Էլ․ հասցե"
            className="login-inpt"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
          />
        </div>
        <div className="lg-inpt">
          <FaLock className="login-icon" />
          <input
            type="password"
            placeholder="Գաղտնաբառ"
            className="login-inpt"
            {...register("password", { required: true })}
            style={
              errors.password && {
                border: "1px solid #E64646FF",
                outline: "none",
                background: "#faebeb",
              }
            }
          />
        </div>
        <button className="login-btn" type="submit">
          Մուտք
        </button>
        <Link className="forgot-password" to={'./recover'}>Մոռացել եմ գաղտնաբառը</Link>
      </form>
    </div>
  );
};

export default LoginForm;
