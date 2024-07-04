import { StrictMode } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
// import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import AddRestaurant from "./Components/FoodForm/AddRestaurant";

function App() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-restaurant" element={<AddRestaurant />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
