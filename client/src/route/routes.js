import Home from '../views/home/Home';
import Order from '../views/home/Order';
import Login from '../views/home/Login';


export const routes = [
    { path: '/home', exact: true, component: Home },
    { path: '/order', component: Order },
    { path: '/login', component: Login }
]