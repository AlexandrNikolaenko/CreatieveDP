'use client'

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import OrderButton from "./buttons";
import { products } from "./optData";
import Link from "next/link";


export default function Products() {
    let [showId, setShowId] = useState(1);
    let scrollFunc = useRef(setShowId);

    useEffect(() => {
        let slideProd = document.getElementById("slideProd");
        let xpoint = document.getElementById(`block${showId}`).offsetLeft;
        slideProd.scroll({
            top: 0,
            left: xpoint,
            behavior: "smooth"
        });
        let slideName = document.getElementById("slideName");
        let ypoint = document.getElementById(`title${showId}`).offsetTop;
        slideName.scroll({
            top: ypoint,
            left: 0,
            behavior: "smooth"
        });
    }, [showId]);

    return(
        <section id="2" className="min-h-screen shadow-section relative z-40 bg-base-color py-14 max-laptop:py-10">
            <div className="wrapper flex flex-col gap-y-14 max-laptop:gap-y-[30px] items-center">
                <h4 className="text-white font-base text-4xl max-laptop:text-3xl max-tablet:text-2xl max-small:text-[22px] text-center font-bold">Что мы предлагаем?</h4>
                <div className="grid max-mobile:flex flex-col grid-cols-6 max-laptop:grid-cols-4 w-full gap-10 max-laptop:gap-5 justify-center items-center">
                    {products.map(product => <ProductBlock product={product} key={product.id} changer={setShowId}/>)}
                </div>
                <OrderButton />
                <div id="block" className="flex flex-col w-full gap-y-5 rounded-[20px] max-laptop:rounded-none shadow-inner max-laptop:shadow-none p-5 max-laptop:p-0">
                    <div className="flex justify-between px-5">
                        <div id="slideName"  className="h-[45px] overflow-y-hidden relative">
                            <ul id="nameLine" className="flex flex-col gap-3">
                                {products.map(product => <ProductTitle product={product} key={product.id}/>)}
                            </ul>
                        </div>
                        {window.innerWidth >= 521 && <SlideButton changeId={setShowId} current={showId}/>}
                    </div>  
                    <div id="slideProd" className="w-full overflow-x-hidden relative">
                        <ul id="blockLine" className="flex gap-x-5 w-max">
                            {products.map(product => <DescProductBlock product={product} key={product.id}/>)}
                            <div className="bg-white w-[3px] rounded"></div>
                        </ul>
                    </div>
                    <div className="flex w-full justify-between items-center max-[350px]:flex-col-reverse gap-3">
                        <OrderButton />        
                        {window.innerWidth < 521 && <SlideButton changeId={setShowId} current={showId}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

function SlideButton({changeId, current}) {
    return (
        <div className={`slideButton overflow-hidden rounded-[10px] h-min bg-active-base`}>
            <button onClick={() => {
                if (current > 1) changeId(current - 1);
                else changeId(products.length);
            }} className="px-5 py-2.5 transition-all duration-300 bg-active-base hover:bg-dark-base">
                <Image alt='turn last' src={'/chevron-left.svg'} width={24} height={24}/>
            </button>
            <button onClick={() => {
                if (current < products.length) changeId(current + 1);
                else changeId(1);
            }} className="px-5 py-2.5 transition-all duration-300 bg-active-base hover:bg-dark-base">
                <Image alt='turn next' src={'/chevron-right.svg'} width={24} height={24}/>
            </button>
        </div>
    )
}

function ProductTitle({product}){
    return (
        <li id={`title${product.id}`}>
            <h3 className="font-base font-bold text-4xl max-laptop:text-3xl max-tablet:text-2xl max-small:text-xl text-white">{product.name}</h3>
        </li>
    )
}

function DescProductBlock({product}) {
    let width = document.documentElement.clientWidth;
    function getWidth() {
        if (width <= 1440) {
            if (width >= 1100) {
                return width - 166
            } else if (width >= 600) {
                return width - 86
            } else {
                return width - 66
            }
        } else return 1360 - 86
    }

    return (
        <>
            <div className="bg-white w-[3px] rounded" id={`block${product.id}`}></div>
            <li className={`flex gap-x-12 gap-y-5 max-tablet:flex-col`} style={{width: getWidth() + 'px'}}>
                <div className="flex flex-col gap-y-[30px] max-tablet:gap-y-5 w-max">
                    <p className="text-white font-base text-base max-laptop:text-sm max-tablet:text-xs text-nowrap">стоимость услуги от <span className="font-ital text-xl max-laptop:text-lg max-tablet:text-base italic">{product.cost}</span></p>
                    <p className="text-white font-base text-base max-laptop:text-sm max-tablet:text-xs text-nowrap">срок реализации от <span className="font-ital text-xl max-laptop:text-lg max-tablet:text-base italic">{product.time} дней</span></p>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-white font-base text-base max-laptop:text-sm max-tablet:text-xs text-nowrap">примеры:</p>
                        <ul className="flex flex-col gap-y-2 list-inside">
                            {product.examples.map(example => <Link href={example.name} key={example.id} className="text-white text-base max-laptop:text-sm max-tablet:text-xs list-disc text-nowrap">{example.name}</Link>)}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 max-tablet:gap-y-4">
                    <h5 className="text-white font-ital text-2xl max-laptop:text-xl max-tablet:text-lg italic">Что это?</h5>
                    <p className="text-white text-base max-laptop:text-sm max-tablet:text-xs">{product.fullDesc}</p>
                    <h5 className="text-white font-ital text-2xl max-laptop:text-xl max-tablet:text-lg italic">Дополнительно</h5>
                    <ul className="leading-relaxed flex flex-col gap-y-2 list-inside">
                        {product.add.map(service => <li key={service.id} className="text-white text-base max-laptop:text-sm max-tablet:text-xs list-disc">{service.service} <span className="font-ital font-bold">{service.price}</span></li>)}
                    </ul>
                </div>
            </li>
        </>
    )
}

function ProductBlock({product, changer}) {
    function scroller() {
        changer(product.id);
        let block = document.getElementById('block').getBoundingClientRect();
        window.scroll({
            top: block.top - ((window.innerHeight - block.height) / 2) + window.scrollY,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <button id={product.id+'scrollButton'} onClick={scroller} className={`productBlock text-left flex flex-col h-full gap-y-6 max-laptop:gap-y-5 max-tablet:gap-y-4 transition-all *:hover:text-white ${product.activeBg} cursor-pointer p-[25px] max-tablet:p-5 shadow-base rounded-[10px] ${product.id == 4 ? 'col-start-3 max-laptop:col-start-auto' : ''} col-span-2`}>
            <h4 className="text-active-base font-base text-2xl max-laptop:text-xl max-tablet:text-lg font-bold transition-all">{product.name}</h4>
            <p className="text-bright font-base text-base  max-laptop:text-sm max-tablet:text-xs transition-all">от <span className="text-inherit text-xl max-laptop:text-lg">{product.cost}</span></p>
            <p className="text-active-base font-base text-base max-desktop:text-sm max-tablet:text-xs transition-all">срок реализации от <span className="text-inherit text-xl max-desktop:text-lg">{product.time} дней</span></p>
            <p className="text-dark text-sm max-laptop:text-xs transition-all">{product.description}</p>
        </button>
    )
}