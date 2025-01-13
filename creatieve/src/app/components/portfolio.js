/* eslint-disable @next/next/no-img-element */
let works = [
    {
        id: 1,
        title: 'OlimpEducation',
        desc: 'Это веб-приложение помогает школьникам готовиться к олимпиадам, предоставляя задания по определенным выбранным критериям.',
        urlImgDesk: '/Desktop - 1.jpg',
        urlImgMob: '/Android Large - 1.jpg',
        isReverse: false
    },
    {
        id: 2,
        title: 'VTB.fines',
        desc: 'Это приложение наша команда разрабатывала как конкурентное преимущество банка ВТБ. В нем можно осуществлять платежи, отслеживать свой рейтинг и прочее.',
        urlImgDesk: '/Desktop - Profile page.jpg',
        urlImgMob: '/Profile page.jpg',
        isReverse: true
    },
    {
        id: 3,
        title: 'Neotechnica',
        desc: 'Этот корпоративный сайт находится в процессе разработки на смену устаревшей версии сайта с сохранением стилистики, цветов и логотипов компании',
        urlImgDesk: '/Main page 2 variant.jpg',
        urlImgMob: '/Android Large - 1.jpg',
        isReverse: false
    }
]

export default function Portfolio() {
    return (
        <section id="4" className="bg-dark-base min-h-screen w-full py-14 max-laptop:py-10 relative z-40 shadow-section">
            <div className="flex flex-col gap-y-10 wrapper items-center">
                <div className="flex flex-col gap-y-5 items-center">
                    <h3 className="text-white font-base text-4xl max-laptop:text-3xl max-tablet:text-2xl max-small:text-text-[22px] text-center font-bold"><span className="text-bright">О качестве</span> наши <span className="text-bright">работы</span> говорят за нас</h3>
                    <p className="text-2xl max-laptop:text-xl max-tablet:text-base text-center text-white">представляем вам несколько наших проектов</p>
                </div>
                <ul className="flex flex-col gap-y-14 max-laptop:gap-y-[30px] w-full">
                    {works.map(work => <Work key={work.id} work={work}/>)}
                </ul>
            </div>
        </section>
    )
}

function Work({work}) {
    return (
        <li className={`flex ${work.isReverse && 'flex-row-reverse'} max-laptop:flex-col-reverse gap-0 max-laptop:gap-5 items-center w-full`}>
            <div className="w-1/2 max-laptop:w-full flex gap-5 max-mobile:gap-2.5 max-laptop:max-w-[673px]">
                <div className="w-[492px] h-[350px] max-mobile:h-[268px] max-[480px]:h-[227px] max-small:h-[186px] overflow-y-scroll rounded-[10px]">
                    <img alt={work.title} className="w-full h-auto" src={work.urlImgDesk}></img>
                </div>
                <div className="w-[161px] h-[350px] max-mobile:h-[268px] max-[480px]:h-[227px] max-small:h-[186px] overflow-y-scroll rounded-[10px]">
                    <img alt={work.title} className="w-full h-auto" src={work.urlImgMob}></img>
                </div>
            </div>
            <div className={`flex flex-col gap-7 max-mobile:gap-2.5 ${work.isReverse ? 'pr-10' : 'pl-10'} max-laptop:p-0`}>
                <h5 className="font-base text-white text-2xl max-laptop:text-xl max-tablet:text-lg font-bold">{work.title}</h5>
                <p className="text-white text-xl max-laptop:text-lg max-tablet:text-base">{work.desc}</p>
            </div>
        </li>
    )
}