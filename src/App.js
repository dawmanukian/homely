import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
