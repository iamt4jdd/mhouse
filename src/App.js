import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from "~/routes";
import { DefaultLayout } from "./Layouts";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const smoothScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const debouncedScrollToTop = debounce(smoothScrollToTop, 100);

  useEffect(() => {
    debouncedScrollToTop();
  }, [pathname, debouncedScrollToTop]);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="w-full overflow-hidden">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Page = route.component;

              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;