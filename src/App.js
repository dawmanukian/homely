import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        </Routes>
      </Router>
    </>
  );
}

export default App;
