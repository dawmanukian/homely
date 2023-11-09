import React from "react";
import ElementAddForm from "../../components/element-add-form/ElementAddForm";
import AccountHeader from "../../components/account-header/AccountHeader";
import AdminLeftMenu from "../../components/admin-left-menu/AdminLeftMenu";
import AdminPage from "../../components/admin-page/AdminPage";
import { useParams } from "react-router-dom";

const AccountPage = () => {

  return (
    <>
      <AccountHeader />
      {/* <AdminPage /> */}
      <ElementAddForm />
    </>
  );
};

export default AccountPage;
