import About from "./pages/About";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  WORK_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: WORK_ROUTE,
    Component: Work,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
];
