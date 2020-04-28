import Home from '../views/home/Home';
import OrderDetail from '../views/order/OrderDetail.page';
import Login from '../views/login/Login';
import Driver from '../unuse/Driver'



export const routes = [
    { path: '/home', exact: true, component: Home },
    { path: '/orderdetail', component: OrderDetail },
    { path: '/login', component: Login },
    { path: '/login', component: Driver }
]