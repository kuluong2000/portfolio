import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Loading from "./components/common/header/loading/Loading";
import Menu from "./components/menu/Menu";
import About from "./layout/about/About";
import Home from "./layout/home/Home";
import Portfolio from "./layout/portfolio/Portfolio";

import routerPublic from "./router";

export default function App() {
  return (
    <>
      {/* <Loading></Loading> */}
      <Header />
      <Routes>
        {routerPublic.map((route, idx) => {
          return <Route key={idx} path={route.path} element={<route.component />}></Route>;
        })}
      </Routes>
      <Menu></Menu>
      {/* <Home></Home> */}
      <Portfolio />
      <About></About>
    </>
  );
}
