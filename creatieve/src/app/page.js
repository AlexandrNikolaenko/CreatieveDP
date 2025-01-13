import Header from "./components/header";
import About from "./components/about";
import Products from "./components/products";
import WhyWe from "./components/whywe";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Products />
      <WhyWe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
