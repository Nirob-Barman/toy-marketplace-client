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
                    {
                        path: "/",
                        element: <ShopByCategory />
                    }
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
                element: <AllToys />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]

    },
]);

export default router;