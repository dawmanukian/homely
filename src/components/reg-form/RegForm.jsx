import React from "react";
import "./reg-form.css";
import { IoMail } from "react-icons/io5";
import { FaUserAlt, FaPhoneAlt, FaClipboardList } from "react-icons/fa";
import { useForm } from "react-hook-form";
import SuccessNotification from "../success-notification/SuccessNotification";

const RegForm = ({ switchForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="reg-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Գրանցվել</h2>
        <div className="r-inpt">
          <FaUserAlt className="reg-icon" />
          <input
            placeholder="Անուն"
            className="reg-inpt"
            {...register("firstName", { required: true })}
            style={
              errors.firstName && {
                border: "1px solid #E64646FF",
                outline: "none",
                background: "#faebeb",
              }
            }
          />
        </div>
        <div className="r-inpt">
          <FaClipboardList className="reg-icon" />
          <input
            placeholder="Ազգանուն"
            className="reg-inpt"
            {...register("lastName", { required: true })}
            style={
              errors.lastName && {
                border: "1px solid #E64646FF",
                outline: "none",
                background: "#faebeb",
              }
            }
          />
        </div>
        <div className="r-inpt">
          <FaPhoneAlt className="reg-icon" />
          <input placeholder="Հեռախոսահամար" className="reg-inpt" />
        </div>
        <div className="r-inpt">
          <IoMail className="reg-icon" />
          <input
            placeholder="Էլ․ հասցե"
            className="reg-inpt"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              },
            })}
            style={
              errors.email && {
                border: "1px solid #E64646FF",
                outline: "none",
                background: "#faebeb",
              }
            }
          />
        </div>
        <button className="reg-btn" type="submit">
          Գրանցվել
        </button>
      </form>
    </div>
  );
};

export default RegForm;
