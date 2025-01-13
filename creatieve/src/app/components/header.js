'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import scrollToBlock from "./optData";
import Link from "next/link";

export default function Header() {
    let [isHidden, setIsHidden] = useState(false);
    let [isShadow, setIsShadow] = useState(window.scrollY != 0);
    let [isOpen, setIsOpen] = useState(false);
    let position = useRef(window.scrollY);
    let lastTimeout = useRef([]);

    screen.addEventListener("orientationchange", location.reload);

    function hidder() {
        let timeout = setTimeout(() => setIsHidden(true), 2000);
        if (position.current >= window.scrollY) {
            lastTimeout.current.forEach(time => clearTimeout(time));
            lastTimeout.current = []
            clearTimeout(timeout);
            setIsHidden(false);
            if (window.scrollY != 0) timeout = setTimeout(() => setIsHidden(true), 2000);
        }
        if (window.scrollY != 0) setIsShadow(true);
        else setIsShadow(false);
        lastTimeout.current = lastTimeout.current.concat([timeout]);
        position.current = window.scrollY; 
    }
    
    useEffect(() => {
        window.onscroll = function() {
            if (!isOpen) {
                hidder();
            } else {
                setIsHidden(false);
                setIsShadow(false);
            }
        }
    })

    useEffect(() => {
        window.onmousemove = function (event) {
            let header = document.getElementsByTagName('header')[0];
            if (event.clientY < header.getBoundingClientRect().height && isHidden) {
                setIsHidden(false);
                header.addEventListener('mouseleave', function() {
                    if (window.scrollY != 0) setIsHidden(true);
                    header.removeEventListener('mouseleave', () => {return});
                })
            }
        }
    })
    

    return (
        <>
            <header className={`fixed z-50 w-full transition-all duration-1000 ${isHidden && '-translate-y-full'} bg-white ${isShadow && 'shadow-base'}`}>
                <div className="flex justify-between wrapper flex-row items-center">
                    <Link href="/#" className="flex gap-x-2 flex-row h-full items-center">
                        <Image alt="Logo" src={'/Logo.svg'} width={15 * Math.sqrt(Math.sqrt(window.innerWidth / 1360))} height={35.5 * Math.sqrt(Math.sqrt(window.innerWidth / 1360))}/>
                        <h5 className="text-base max-laptop:text-sm max-tablet:text-xs font-attention uppercase text-dark-base">Crea<span className="text-bright">tie</span>ve</h5>
                    </Link>
                    {window.innerWidth >= 530 ?
                    <nav className="flex gap-x-7">
                        <HeaderButton text={'О нас'} blockId={1} />
                        <HeaderButton text={'Цены'} blockId={2} />
                        <HeaderButton text={'Портфолио'} blockId={4} />
                        <HeaderButton text={'Заказать'} blockId={5} />
                    </nav>
                    :
                    <div className="py-2.5 transition-all duration-300 active:rotate-180" onClick={() => {
                        if (!isOpen) {
                            lastTimeout.current.forEach(time => clearTimeout(time));
                        } else {
                            let timeout = setTimeout(() => setIsHidden(true), 2000);
                            lastTimeout.current = lastTimeout.current.concat([timeout]);
                        }
                        setIsOpen(!isOpen);
                        }}>
                        <Image alt="menu" width={20} height={20} src={!isOpen ? '/menu.svg' : '/close.svg'}/>
                    </div>
                    }
                </div>
            </header>
            {window.innerWidth < 530 && 
            <nav className={`fixed z-[45] top-0 left-0 transition-all bg-white h-screen px-[10px] pt-16 flex flex-col gap-y-3 ${!isOpen && '-translate-x-full'}`} style={{width: window.innerWidth / 2 + 'px'}}>
                <HeaderButton text={'О нас'} blockId={1} action={() => setIsOpen(!isOpen)}/>
                <HeaderButton text={'Цены'} blockId={2} action={() => setIsOpen(!isOpen)}/>
                <HeaderButton text={'Портфолио'} blockId={4} action={() => setIsOpen(!isOpen)}/>
                <HeaderButton text={'Заказать'} blockId={5} action={() => setIsOpen(!isOpen)}/>
            </nav>}
        </>
    )
}

function HeaderButton({text, blockId, action}){     
    // let [isActive, setIsActive] = useState(document.getElementById(toString(blockId)));
    // let h = window.innerHeight;
    // let block = document.getElementById(toString(blockId))

    // useEffect(() => {
    //     window.onscroll = function () {
    //         console.log(block.getBoundingClientRect().top < (h * 3/4));
    //         if (block.getBoundingClientRect().top < (h * 3/4) || block.getBoundingClientRect().bottom > (h * 3/4) && !isActive) {
    //             setIsActive(true);
    //         } else if (block.getBoundingClientRect().bottom < (h * 3/4) || block.getBoundingClientRect().top > (h * 3/4) && isActive) {
    //             setIsActive(false);
    //         }
    //     }
    // })
    
    // return (
    //     <button className={`uppercase py-[21px] max-tablet:py-[18px] font-base transition-all duration-300 text-base max-laptop:text-sm max-tablet:text-xs ${isActive ? 'text-active-base' : 'text-dark'} hover:text-active-base active:text-active-base`} onClick={() => scrollToBlock(blockId)}>
    //         {text}
    //     </button>
    // )

    return (
        <button className={`uppercase py-[21px] max-tablet:py-[18px] font-base transition-all duration-300 text-base max-laptop:text-sm max-tablet:text-xs text-dark hover:text-active-base active:text-active-base`} onClick={() => {
            scrollToBlock(blockId);
            if (action) {
                action();
            }
        }}>
            {text}
        </button>
    )
}