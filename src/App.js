import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import CardPage from "./pages/card-page/CardPage";
import Loading from "./components/loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    try {
      const get_items = async () => {
        try {
          const res = await axios.get(
            "https://service.homely.am/api/items/modern"
          );
          if (res.data.all_items) {
            dispatch({
              type: "get-images",
              payload: { all_images: res.data.all_images },
            });
            dispatch({
              type: "get-items",
              payload: { all_items: res.data.all_items.reverse() },
            });
            // setShowLoading(false);
          }
        } catch (error) {
          console.log(error);
          alert(false);
        }
      };
      get_items();
    } catch (error) {
      console.log(error);
      // setShowLoading(false);
    }
  }, []);

  return (
    <>
        <Router>
          <Routes>
            <Route path={"/*"} element={<HomePage />} />
            <Route path={"/item/:itemId"} element={<CardPage />} />
          </Routes>
        </Router>
     
    </>
  );
}

export default App;
