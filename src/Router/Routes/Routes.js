import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
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
            // {
            //     path: '/detailService/:id',
            //     element: <Services></Services>,
            //     loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
            // },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/addReview',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({params}) =>fetch(`http://localhost:5000/addServic/${params.id}`)
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