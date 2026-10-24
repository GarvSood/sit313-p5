import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Pages/Post";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";
import Gallery from "./Components/Gallery";
import FeaturedArticles from "./Components/FeaturedArticles";
import FeaturedTutorials from "./Components/FeaturedTutorials";
import Subscribe from "./Components/Subscribe";
import Contact from "./Components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Gallery />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;