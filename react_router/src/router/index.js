import Home from '../pages/Home';
import About from '../pages/About';
import Profile from '../pages/Profile';
import User from '../pages/User';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Detail from '../pages/Detail';
import Detail_2 from '../pages/Detail_2';
import Detail_3 from '../pages/Detail_3';
import AboutHistory from '../pages/About/about-history';
import AboutCulture from '../pages/About/about-culture';
import AboutContact from '../pages/About/about-contact';
import AboutPerfession from '../pages/About/about-perfession';
import JoinUs from '../pages/JoinUs';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutHistory
      },
      {
        path: "/about/culture",
        component: AboutCulture
      },
      {
        path: "/about/contact",
        component: AboutContact
      },
      {
        path: "/about/perfession",
        component: AboutPerfession
      },
      {
        path: "/about/joinus",
        component: JoinUs
      },
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/product",
    component: Product
  },
  {
    path: "/detail",
    exact: true,
    component: Detail
  },
  {
    path: "/detail_2",
    component: Detail_2
  },
  {
    path: "/detail_3",
    component: Detail_3
  },
]

export default routes;