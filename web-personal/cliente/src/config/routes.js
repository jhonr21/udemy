//Layout
import LayoutAndmin from '../layouts/LayoutAdmin';


//admin page
import AdminHouse from "../pages/Admin";
import AdminSingIn from '../pages/Admin/Signin';

const routes = [
    {
        path: "/admin",
        component: LayoutAndmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHouse,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSingIn,
                exact: true,    
        
            }
        ]
    }
];

export default routes;