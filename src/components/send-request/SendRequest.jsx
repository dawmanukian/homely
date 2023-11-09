import React from "react";
import "./send-request.css";
import { useForm } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";

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
      <form className="send-req-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="close">
          <div onClick={() => onClose()}>
            <RiCloseFill />
          </div>
        </div>
        <input
          placeholder="Հեռախոսահամար"
          {...register("userPhone", { required: true })}
        />
        <textarea
          {...register("message")}
          placeholder="Գրել հաղորթագրություն ..."
        ></textarea>
        <button className="req-send-btn">Ուղարկել</button>
      </form>
    </div>
  );
};

export default SendRequest;
