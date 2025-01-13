/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import scrollToBlock, { sectionsId } from "./optData";

export default function About() {
    return (
        <section id="1" className="h-screen max-desktop:h-auto min-h-screen max-mobile:h-screen pt-0 max-desktop:pt-[140px] max-mobile:pt-[70px] pb-0 max-desktop:pb-[60px] wrapper flex flex-col items-center justify-center gap-14 max-laptop:gap-10">
            <div className="grid grid-cols-2 max-desktop:flex flex-col items-center gap-16 max-laptop:gap-10px">
                <div className="flex flex-col gap-y-14 max-laptop:gap-y-10 max-tablet:gap-y-[30px]">
                    <h3 className="text-base-color font-bold font-base text-2xl max-laptop:text-xl max-tablet:text-lg max-small:text-base">Нужен сайт или веб-приложение?<br/>
                    <span className="text-bright font-bold text-2xl max-laptop:text-xl max-tablet:text-lg max-small:text-base">Вы по адресу!</span></h3>
                    <h1 className="text-dark-base text-5xl max-laptop:text-4xl max-tablet:text-3xl max-small:text-2xl font-attention uppercase">Веб-разработка под ключ</h1>
                    <p className="text-base max-laptop:text-sm max-tablet:text-xs font-base">Мы <span className="text-active-base">молодая</span> и <span className="text-active-base">креативная команда</span> разработчиков. Каждый член нашей команды имеет опыт работы в сфере веб-разработки.
                    Для нас очень <span className="text-active-base">важен</span> каждый <span className="text-active-base">клиент</span>, и мы <span className="text-active-base">дорожим</span> нашей <span className="text-active-base">репутацией</span>, поэтому мы создаем только уникальные, качественные и современные продукты.</p>
                </div>
                <img alt="Let's work with us!" src={'/Обложка.png'} className="w-full max-w-[650px] h-auto"/>
            </div>
            <button onClick={() => {
                    let blockId = sectionsId.filter(section => section.name == 'portfolio')[0].id
                    scrollToBlock(blockId)
                }} className="shadow-small flex gap-x-3 items-center py-2.5 px-4 rounded-base transition-all duration-300 bg-base-color hover:bg-active-base focus:bg-active-base">
                <span className="text-white font-normal text-2xl max-laptop:text-xl max-tablet:text-lg max-small:text-base">Наши работы</span>
                <Image alt="To portfolio" src={'/arrow-down.svg'} width={24} height={24}/>
            </button>
        </section>
    )
}