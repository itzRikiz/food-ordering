import { createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
// import AddRestaurant from "./Components/FoodForm/AddRestaurant";
import AppLayout from "./Components/Body/AppLayout";
import DishPage from "./Components/Dishes/DishPage";
import Cart from "./Components/Cart/Cart";
import LoginForm from "./pages/Sessions/Login";
import SignupForm from "./pages/Sessions/Signup";
import CardTable from "./Components/FoodForm/CardTable";
import Unauthorized from "./pages/Sessions/Unauthorized";
import PrivateRoute from "./PrivateRoute";
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
      { path: "/unauthorized", element: <Unauthorized /> },

      {
        path: "/add-restaurant",
        element: <PrivateRoute />,
        children: [{ path: "/add-restaurant", element: <CardTable /> }],
      },
    ],
  },
]);

export default router;
