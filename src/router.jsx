import { createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import AddRestaurant from "./Components/FoodForm/AddRestaurant";
import AppLayout from "./Components/Body/AppLayout";
import DishPage from "./Components/Dishes/DishPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add-restaurant",
        element: <AddRestaurant />,
      },
      {
        path: "/view-restaurant/:id",
        element: <DishPage />,
      },
    ],
  },
]);

export default router;
