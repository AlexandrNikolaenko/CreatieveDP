'use client'

import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
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
        <About />
        <DynamicProducts/>
        <DynamicWhyWe/>
        <Portfolio />
        <Contact />
        <DynamicFooter/>
    </>
    )
}