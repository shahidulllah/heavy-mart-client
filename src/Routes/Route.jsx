import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/ResgisterPage/Register";
import Login from "../Pages/LoginPage/Login";
import Details from "../Components/DetailsProducts/Details";
import ProductSection from "../Components/Card/ProductSection";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
            },
            {
                path: "/product",
                element: <ProductSection></ProductSection>,
                loader: () => fetch('http://localhost:5000/productsCount')
            },
        ]
        
    }
])