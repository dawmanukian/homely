import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import LoginRegPage from "./pages/login-reg-page/LoginRegPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<HomePage />}/>
          <Route path={'/auth'} element={<LoginRegPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
