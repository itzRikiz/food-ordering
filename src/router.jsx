import { createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import AddRestaurant from "./Components/FoodForm/AddRestaurant";
import AppLayout from "./Components/Body/AppLayout";
import DishPage from "./Components/Dishes/DishPage";
import Cart from "./Components/Cart/Cart";
import LoginForm from "./pages/Sessions/Login";
import SignupForm from "./pages/Sessions/Signup";

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
      {
        path: "/cart-page",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

export default router;
