import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register";
import AdminLayout from "../layouts/Admin";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import ProductDetail from "../pages/admin/ProductDetail";


const RouteList = createBrowserRouter([
    
    {
      path: "/login",
      element: <Login />, 
    },
    {
      path: "/register",
      element: <Register />, 
    },
    {
        path:"/admin",
        element:<AdminLayout/>,
        children:[
            {
                path:'dashboard',
                element:<Dashboard/>
            },
            {
                path:'products',
                element:<Products/>,
                children:[
                    {
                    path:'productdetail/:id',
                    element:<ProductDetail/>,
                    }
                ]
            },
        ]
    },
  ]);

 export default RouteList