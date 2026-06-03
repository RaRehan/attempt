import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCollection from "../components/FeaturedCollection";
import BrandStory from "../components/BrandStory";
import Footer from "../components/Footer";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <Footer />
    </>
  );
}