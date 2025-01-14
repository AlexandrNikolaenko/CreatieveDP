'use client'

// import Header from "./components/header";
import About from "./about";
// import Products from "./components/products";
// import WhyWe from "./components/whywe";
import Portfolio from "./portfolio";
import Contact from "./contact";
// import Footer from "./components/footer";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(
    () => import('./header'),
    { ssr: false }
)

const DynamicProducts = dynamic(
    () => import('./products'),
    { ssr: false }
)

const DynamicWhyWe = dynamic(
    () => import('./whywe'),
    { ssr: false }
)

const DynamicFooter = dynamic(
    () => import('./footer'),
    { ssr: false }
)

export default function Main() {
    return (
    <>
        <DynamicHeader/>
        {/* <Header /> */}
        {/* <ClientComponent name={'about'}/> */}
        <About />
        <DynamicProducts/>
        {/* <Products /> */}
        <DynamicWhyWe/>
        {/* <WhyWe /> */}
        {/* <ClientComponent name={'portfolio'}/> */}
        <Portfolio />
        {/* <ClientComponent name={'contact'}/> */}
        <Contact />
        <DynamicFooter/>
        {/* <Footer /> */}
    </>
    )
}