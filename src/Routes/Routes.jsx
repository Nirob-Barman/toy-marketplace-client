import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import LoginLayout from "../Layout/LoginLayout";
import ReactTabs from "../Pages/Home/ReactTabs";
import Register from "../Pages/LoginPage/RegistrationPage/Register";
import Blogs from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToysSection/AllToys";
import ShopByCategory from "../Pages/ShopByCategory/ShopByCategory";
import SingleToyDetails from "../Pages/AllToysSection/SingleToyDetails";
import AddToy from "../Pages/AllToysSection/AddToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Main />,
                children: [
                    // {
                    //     path: "/",
                    //     element: <ReactTabs />
                    // }
                    // {
                    //     path: "/",
                    //     element: <ShopByCategory />
                    // }
                ]
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/all-toys',
                element: <AllToys />,
                loader: () => fetch('http://localhost:5000/all-toys')
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/single-toys',
                element: <SingleToyDetails />
            },
            {
                path: '/add-toy',
                element: <AddToy />
            }
        ]

    },
]);

export default router;