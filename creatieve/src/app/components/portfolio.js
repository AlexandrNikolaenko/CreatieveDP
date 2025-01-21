import urlImgDesk1 from '../../../public/Desktop - 1.jpg';
import urlImgMob1 from '../../../public/Android Large - 1.jpg';
import urlImgDesk2 from '../../../public/Desktop - Profile page.jpg';
import urlImgMob2 from '../../../public/Profile page.jpg';
import urlImgDesk3 from '../../../public/Main page 2 variant.jpg';
import urlImgMob3 from '../../../public/iPhone 8 - 1.jpg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { showCheck, delta } from './optData';

let works = [
    {
        id: 1,
        title: 'OlimpEducation',
        desc: 'Это веб-приложение помогает школьникам готовиться к олимпиадам, предоставляя задания по определенным выбранным критериям.',
        urlImgDesk: urlImgDesk1,
        urlImgMob: urlImgMob1,
        isReverse: false
    },
    {
        id: 2,
        title: 'VTB.fines',
        desc: 'Это приложение наша команда разрабатывала как конкурентное преимущество банка ВТБ. В нем можно осуществлять платежи, отслеживать свой рейтинг и прочее.',
        urlImgDesk: urlImgDesk2,
        urlImgMob: urlImgMob2,
        isReverse: true
    },
    {
        id: 3,
        title: 'Neotechnica',
        desc: 'Этот корпоративный сайт находится в процессе разработки на смену устаревшей версии сайта с сохранением стилистики, цветов и логотипов компании',
        urlImgDesk: urlImgDesk3,
        urlImgMob: urlImgMob3,
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
    let [isHidden, setIsHidden] = useState(true);

    useEffect(function() {
        if (isHidden && window.innerHeight - delta > document.getElementById(`work${work.id}`).getBoundingClientRect().top) setIsHidden(false);
        else if (isHidden && window.innerHeight - delta < document.getElementById(`work${work.id}`).getBoundingClientRect().top) {
            let func = function (arg) {
                if (window.innerHeight - delta > document.getElementById(`work${work.id}`).getBoundingClientRect().top) {
                    setIsHidden(false);
                    clearInterval(arg);
                    return true
                } else return false;
            }
            showCheck(func);
        } else return
    }, [isHidden, work.id]);

    return (
        <li id={`work${work.id}`} className={`flex ${work.isReverse && 'flex-row-reverse'} transition-all duration-700 ${isHidden && 'opacity-0 translate-y-6'} max-laptop:flex-col-reverse gap-0 max-laptop:gap-5 items-center w-full`}>
            <div className="w-1/2 max-laptop:w-full flex gap-5 max-mobile:gap-2.5 max-laptop:max-w-[673px]">
                <div className="w-[492px] h-[350px] max-mobile:h-[268px] max-[480px]:h-[227px] max-small:h-[186px] overflow-y-scroll rounded-[10px]">
                    <Image alt={work.title} className="w-full h-auto" src={work.urlImgDesk} />
                </div>
                <div className="w-[161px] h-[350px] max-mobile:h-[268px] max-[480px]:h-[227px] max-small:h-[186px] overflow-y-scroll rounded-[10px]">
                    <Image alt={work.title} className="w-full h-auto" src={work.urlImgMob} />
                </div>
            </div>
            <div className={`flex flex-col gap-7 max-mobile:gap-2.5 ${work.isReverse ? 'pr-10' : 'pl-10'} max-laptop:p-0`}>
                <h5 className="font-base text-white text-2xl max-laptop:text-xl max-tablet:text-lg font-bold">{work.title}</h5>
                <p className="text-white text-xl max-laptop:text-lg max-tablet:text-base">{work.desc}</p>
            </div>
        </li>
    )
}