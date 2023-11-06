import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import LoginRegPage from "./pages/login-reg-page/LoginRegPage";
import CardPage from "./pages/card-page/CardPage";
import AccountPage from "./pages/account-page/AccountPage";
import PrivateRoute from "./util/private-route/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} exact/>
          <Route path={"/auth"} element={<LoginRegPage />} exact/>
          <Route path={"/item/:itemId"} element={<CardPage />} exact/>
          <Route path={"/account"} component={<AccountPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
