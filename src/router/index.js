import Home from "../layout/home/Home";
import Portfolio from "../layout/portfolio/Portfolio";
import About from "../layout/about/About";
import Contact from "../layout/contact/Contact";

const routerPublic = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
];
export default routerPublic;
