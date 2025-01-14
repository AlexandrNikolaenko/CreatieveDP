'use client'

// import Header from "./components/header";
import About from "./about";
// import Products from "./components/products";
// import WhyWe from "./components/whywe";
import Portfolio from "./portfolio";
import Contact from "./contact";
// import Footer from "./components/footer";
import dynamic from "next/dynamic";

// const DynamicComponentWithNoSSR = dynamic(
//     () => import('../components/BrowserOnlyComponent'),
//     { ssr: false }
// )

function ClientComponent({name}) {
  return dynamic(
      () => import(`./${name}`),
      { ssr: false }
  )
}

export default function Main() {
    return (
    <>
        <ClientComponent name={'header'}/>
        {/* <Header /> */}
        {/* <ClientComponent name={'about'}/> */}
        <About />
        <ClientComponent name={'products'}/>
        {/* <Products /> */}
        <ClientComponent name={'whywe'}/>
        {/* <WhyWe /> */}
        {/* <ClientComponent name={'portfolio'}/> */}
        <Portfolio />
        {/* <ClientComponent name={'contact'}/> */}
        <Contact />
        <ClientComponent name={'footer'}/>
        {/* <Footer /> */}
    </>
    )
}