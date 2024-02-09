import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import LoginRegPage from "./pages/login-reg-page/LoginRegPage";
import CardPage from "./pages/card-page/CardPage";
import RecoverPage from "./pages/recover-page/RecoverPage";
import Loading from "./components/loading/Loading";
import { useState } from "react";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  // setTimeout(() => setShowLoading(false), "3000");

  return (
    <>
      {/* {showLoading ? (
        <Loading />
      ) : ( */}
        <Router>
          <Routes>
            <Route path={"/*"} element={<HomePage />} />
            <Route path={"/auth"} element={<LoginRegPage />} />
            <Route path={"/auth/recover"} element={<RecoverPage />} />
            <Route path={"/item/:itemId"} element={<CardPage />} />
          </Routes>
        </Router>
      {/* )} */}
    </>
  );
}

export default App;
