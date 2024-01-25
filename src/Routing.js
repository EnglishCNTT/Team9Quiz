import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./router";

export default function Routing() {
  return (
    <Router>
      <Routes>
        {Object.keys(routes).map((key) => {
          const route = routes[key];
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component()}
            />
          );
        })}
      </Routes>
    </Router>
  );
}
