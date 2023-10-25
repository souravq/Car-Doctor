import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Registration from "../components/pages/Registration/Registration";
import CheckOut from "../components/pages/Service/CheckOut/CheckOut";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=>fetch("http://localhost:5000/services")
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Registration/>
            },
            {
                path:"/checkout/:id",
                element:<CheckOut/>
            },
        ]
    }
]);

export default routes;
