import { createBrowserRouter } from "react-router";
import Home from '../../src/Layouts/Home/Home';
import Root from "../Layouts/Roots/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddProperties from "../Pages/AddProperties/AddProperties";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Login from "../Pages/Login/Login";
import MyRatings from "../Pages/MyRatings/MyRatings";
import Register from "../Pages/Register/Register";
import UpdateProperties from "../Pages/UpdateProperties/UpdateProperties";
import PrivateRouter from "../Provider/PrivateRouter";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('https://assignment10-ten.vercel.app/Foods'),
                element: <Home></Home>
            },
            {
                path: "/about",
                loader: () => fetch('https://assignment10-ten.vercel.app/FoodAll'),
                element: <AboutUs></AboutUs>
            },
            {
                path: "/Register",
                element: <Register></Register>
            },
            {
                path: "/Login",
                element: <Login></Login>
            },
            {
                path: "/detail/:_id",
                loader: () => fetch('https://assignment10-ten.vercel.app/FoodAll'),
                element: <PrivateRouter>
                    <FoodDetails></FoodDetails>
                </PrivateRouter>
            },
            {
                path: "/addProp",
                element: <PrivateRouter>
                    <AddProperties></AddProperties>
                </PrivateRouter>
            },
            {
                path: "/updateProp/:_id",
                loader: ({params}) => fetch(`https://assignment10-ten.vercel.app/Foods/${params._id}`),
                element: <PrivateRouter>
                    <UpdateProperties></UpdateProperties>
                </PrivateRouter>
            },
            {
                path: "/ratings",
                
                element: <PrivateRouter>
                   <MyRatings></MyRatings>
                </PrivateRouter>
            },

        ]
    },
    {
        path: "/*",
        element: <div className="flex flex-col justify-center items-center min-h-screen bg-gray-400">
            <img src="https://i.ibb.co.com/q3PznjfL/mac-error.jpg" alt="" className="w-150 h-100 object-contain rounded-lg shadow-fuchsia-50 "/>

            <p className="text-4xl font-bold text-blue-950 mt-4">Page Not Found</p>
            </div>
    },

]);
export default router;