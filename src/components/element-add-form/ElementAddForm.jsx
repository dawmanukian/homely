import React from "react";
import "./element-add-form.css";

const ElementAddForm = () => {
  return (
    <div>
      <form>
        <h2>Ավելացնել գույք</h2>
        <input className="add-input" type="text" placeholder="Անուն"/>
        <input className="add-input" type="text" placeholder="Ազգանուն"/>
        <input className="add-input" type="tel" placeholder="Հեռախոսահամար"/>
        <input className="add-input" type="email" placeholder="Էլ․ հասցե"/>
        <h2>Նկարագրությունը</h2>
        <input type="radio" name="element-type"/>
        <input type="radio" name="element-type"/>
        <input type="radio" name="element-type"/>
        <h2>Գույքի տիպը</h2>
        <input type="radio"/>
        <input type="radio"/>
        <input type="radio"/>
        <input type="radio"/>

      </form>
    </div>
  );
};

export default ElementAddForm;
