'use client'

import Link from "next/link";
import Image from "next/image";
import scrollToBlock, { products } from "./optData";

export default function Footer() {
    return(
        <footer className="shadow-section w-full py-10">
            <div className="wrapper flex max-tablet:grid max-tablet:grid-cols-2 flex-nowrap max-[900px]:flex-wrap justify-between max-tablet:justify-center gap-y-5 *:gap-y-5 items-center gap-x-5">
                <Link href="/#" className="flex gap-x-2 flex-row h-full items-center col-span-2">
                    <Image alt="Logo" src={'/Logo.svg'} width={15 * Math.sqrt(Math.sqrt(window.innerWidth / 1360)) * 1.5} height={35.5 * Math.sqrt(Math.sqrt(window.innerWidth / 1360)) * 1.5}/>
                    <h5 className="text-xl max-laptop:text-lg max-tablet:text-base font-attention uppercase text-dark-base">Crea<span className="text-bright">tie</span>ve</h5>
                </Link>
                <div className="flex flex-col items-start start col-span-1">
                    <FooterButton text={'О нас'} blockId={1} />
                    <FooterButton text={'Цены'} blockId={2} />
                    <FooterButton text={'Портфолио'} blockId={4} />
                    <FooterButton text={'Заказать'} blockId={5} />
                </div>
                <nav className="flex flex-col items-start col-span-1">
                    {products.map(product => <ProductLink product={product} key={product.id}/>)}
                </nav>
                <div className="flex flex-col *:text-gray-500 col-span-2">
                    <Link href={'/#'}>Политика конфиденциальности</Link>
                    <p>Сайт не является публичной офертой</p>
                    <Link href={'mailto:nikol.alex06@mail.ru'}>nikol.alex06@mail.ru</Link>
                </div>
            </div>
        </footer>
    )
}

function FooterButton({text, blockId}) {
    return (
        <button className={`transition-all duration-300 text-lg max-laptop:text-base max-tablet:text-sm text-dark hover:text-active-base active:text-active-base`} onClick={() => scrollToBlock(blockId)}>
            {text}
        </button>
    )
}

function ProductLink({product}) {
    function scroller() {
        scrollFunc.current()
        changer(product.id);
        let block = document.getElementById('block').getBoundingClientRect();
        window.scroll({
            top: block.top - ((window.innerHeight - block.height) / 2) + window.scrollY,
            left: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <button onClick={scroller} className={`text-dark text-lg max-laptop:text-base max-tablet:text-sm productBlock text-left transition-all cursor-pointer`}>{product.name}</button>
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
        <button onClick={scroller} className={`productBlock text-left flex flex-col h-full gap-y-6 max-laptop:gap-y-5 max-tablet:gap-y-4 transition-all *:hover:text-white ${product.activeBg} cursor-pointer p-[25px] max-tablet:p-5 shadow-base rounded-[10px] ${product.id == 4 ? 'col-start-3 max-laptop:col-start-auto' : ''} col-span-2`}>
            <h4 className="text-active-base font-base text-2xl max-laptop:text-xl max-tablet:text-lg font-bold transition-all">{product.name}</h4>
            <p className="text-bright font-base text-base  max-laptop:text-sm max-tablet:text-xs transition-all">от <span className="text-inherit text-xl max-laptop:text-lg">{product.cost}</span></p>
            <p className="text-active-base font-base text-base max-desktop:text-sm max-tablet:text-xs transition-all">срок реализации от <span className="text-inherit text-xl max-desktop:text-lg">{product.time} дней</span></p>
            <p className="text-dark text-sm max-laptop:text-xs transition-all">{product.description}</p>
        </button>
    )
}