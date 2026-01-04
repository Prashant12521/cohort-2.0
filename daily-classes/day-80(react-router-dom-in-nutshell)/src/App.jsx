import React from "react";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Kodr from "./pages/Kodr.jsx";
import Kodex from "./pages/Kodex.jsx";
import AllCourses from "./pages/AllCourses.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./pages/Layout.jsx";

const App = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "courses",
          element: <Courses />,
          children: [
            {
              path: "kodr",
              element: <Kodr />,
            },
            {
              path: "kodex",
              element: <Kodex />,
            },
            {
              index: true,
              element: <AllCourses />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={allRoutes} />

    // <div className="container">
    //   <Navbar />
    //   {/* <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />

    //     <Route path="/courses" element={<Courses />}>
    //       <Route path="/courses" element={<AllCourses />} />
    //       <Route path="/courses/kodr" element={<Kodr />} />
    //       <Route path="/courses/kodex" element={<Kodex />} />
    //     </Route>
    //   </Routes> */}
    //   <Footer />
    // </div>
  );
};

export default App;
