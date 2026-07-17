import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Lead from "./pages/Lead";
import BlogDetails from "./components/blog/BlogDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

<Route
  path="/blog/:slug"
  element={<BlogDetails />}
/>
        <Route
          path="/lead"
          element={<Lead />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;