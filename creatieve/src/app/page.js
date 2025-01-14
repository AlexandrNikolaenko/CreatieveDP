// import Header from "./components/header";
// import About from "./components/about";
// import Products from "./components/products";
// import WhyWe from "./components/whywe";
// import Portfolio from "./components/portfolio";
// import Contact from "./components/contact";
// import Footer from "./components/footer";
// import dynamic from "next/dynamic";
import Main from "./components/main";

// const DynamicComponentWithNoSSR = dynamic(
//     () => import('../components/BrowserOnlyComponent'),
//     { ssr: false }
// )

// function ClientComponent({name}) {
//   return dynamic(
//       () => import(`./components/${name}`),
//       { ssr: false }
//   )
// }

export default function Home() {
  return (
    <>
      <Main />
      {/* <ClientComponent name={'header'}/>
      <Header />
      <ClientComponent name={'about'}/>
      <About />
      <ClientComponent name={'products'}/>
      <Products />
      <ClientComponent name={'whywe'}/>
      <WhyWe />
      <ClientComponent name={'portfolio'}/>
      <Portfolio />
      <ClientComponent name={'contact'}/>
      <Contact />
      <ClientComponent name={'footer'}/>
      <Footer /> */}
    </>
  );
}
