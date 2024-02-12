import React from "react";
import "./send-request.css";
import { useForm } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { t } from "i18next";

const SendRequest = ({ onClose }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="send-req-panel">
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={() => onClose()}
      ></div>
      <form className="send-req-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="close">
          <div onClick={() => onClose()}>
            <RiCloseFill />
          </div>
        </div>
        <input
          placeholder={t("user-name")}
          {...register("userName", { required: true })}
          style={
            errors.userName && {
              border: "1px solid #ff0000c9",
            }
          }
        />
        <input
          placeholder={t("user-phone")}
          {...register("userPhone", { required: true })}
          style={
            errors.userPhone && {
              border: "1px solid #ff0000c9",
            }
          }
        />
        <textarea
          {...register("message")}
          placeholder={t("user-message")}
        ></textarea>
        <button className="req-send-btn">{t("send")}</button>
      </form>
    </div>
  );
};

export default SendRequest;
