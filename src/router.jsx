import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import AddRestaurant from "./Components/FoodForm/AddRestaurant";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
    </>
  )
);

export default router;
