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
                    <Link href={'https://st-152-fz.ru/index_polic.php?name=Николаенко%20Александр%20Иванович&site=creatieve.ru&email=nikol.alex06@mail.ru'}>Политика конфиденциальности</Link>
                    <Link href={'mailto:nikol.alex06@mail.ru'}>nikol.alex06@mail.ru</Link>
                    <p>Сайт не является публичной офертой</p>
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
        let button = document.getElementById(product.id+'scrollButton');
        button.click();
    }
    
    return (
        <button onClick={scroller} className={`text-dark text-lg max-laptop:text-base max-tablet:text-sm productBlock text-left transition-all cursor-pointer`}>{product.name}</button>
    )
}