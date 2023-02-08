import "./App.css";
import Navbar from "./Component/Navbar/Navbar.js";
import Hero from "./Component/Hero/Hero";
import FyloDetails from "./Component/FyloDetails/FyloDetails";
import Article from "./Component/FyloArticle/Article";
import Testimonial from "./Component/Testimonial/Testimonial";
import Email from "./Component/Email/Email";
import Footer from "./Component/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FyloDetails />
      <Article />
      <Testimonial />
      <Email />
      <Footer />
    </div>
  );
}
