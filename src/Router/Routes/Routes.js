import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetail from "../../Pages/Home/Services/ServiceDetail";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Services from "../../Pages/Services/Services";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://y-six-neon.vercel.app/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])
export default router;