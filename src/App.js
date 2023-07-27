import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Fragment } from "react"

import { publicRoutes } from "~/routes"
import { DefaultLayout } from "./components/Layouts"

function App() {

  return (
    <>
     <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map( (route, index) => {
              let Page = route.component

              let Layout = DefaultLayout

              if(route.layout) {
                Layout = route.layout
              }
              else if (route.layout === null) {
                Layout = Fragment
              }
              return <Route key={index} path={route.path} 
              element={
                <Layout>
                  <Page />
                </Layout>
              } 
            />;
          })}
        </Routes>
      </div>
     </Router>
    </>
  )
}

export default App