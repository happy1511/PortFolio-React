import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";
import PortFolio from "../pages/PortFolio";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import SkillsSection from "../pages/SkillsSection";

const routes = [
  {
    id: 1,
    path: "/",
    isAdminRoute: false,
    protected: false,
    component: PortFolio,
  },
  {
    id: 2,
    isAdminRoute: true,
    protected: false,
    path: "/admin",
    component: AdminLogin,
  },
  {
    id: 3,
    isAdminRoute: true,
    protected: true,
    path: "/admin/skills-section",
    component: SkillsSection,
  },
  {
    id: 3,
    isAdminRoute: true,
    protected: true,
    path: "/admin/dashboard",
    component: Dashboard,
  },
  {
    id: 4,
    isAdminRoute: true,
    protected: true,
    path: "/admin/skills",
    component: Skills,
  },
  {
    id: 3,
    isAdminRoute: true,
    protected: true,
    path: "/admin/projects",
    component: Projects,
  },
];

const protectRoute = (route) => {
  const adminToken = localStorage.getItem("adminToken");
  if (!route.isAdminRoute) {
    return (
      <Route path={route.path} element={<route.component />} key={route.id} />
    );
  } else {
    if (adminToken) {
      return (
        <Route path={route.path} element={<route.component />} key={route.id} />
      );
    } else {
      return route.path !== "/admin" ? (
        <Route
          path={route.path}
          element={<Navigate to="/admin" replace />}
          key={route.id}
        />
      ) : (
        <Route path={route.path} element={<AdminLogin />} key={route.id} />
      );
    }
  }
};

const NavContainer = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>{routes.map((route) => protectRoute(route))}</Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default NavContainer;
