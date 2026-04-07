import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Body from "./components/Body/index";
import Hero from "./components/Hero/index"; // импорт Hero
import { Gallery } from "./Pages/Gallery/gallery";
import Footer from "./components/Footer/index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero /> {/* отображение отдельного Hero */}
              <Body /> {/* Body без Hero */}
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
