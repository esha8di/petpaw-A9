
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home/Home";

import Profile from "../pages/Profile/Profile";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Privaterouter from "./Privaterouter";
import Servicedetails from "../pages/Servicedetails/Servicedetails";
import Forgotpass from "../pages/Forgotpass/Forgotpass";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'/services',
          Component:Services,
        },
        {
          path:'/profile',
          element:<Privaterouter>
            <Profile></Profile>
          </Privaterouter>
        },
        {
          path:'/login',
          Component:Login,
        },
        {
          path:'/register',
          Component:Register,
        },
        {
          path:'/servicedetails/:id',
          element:<Privaterouter>
            <Servicedetails></Servicedetails>
            
          </Privaterouter>
        },
        {
          path:'/forgot/:email',
          Component:Forgotpass,
        }
        
    ]
  },
]);

export default router;