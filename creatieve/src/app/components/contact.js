'use client'

import { useState, useEffect } from "react";
import { BrightButton } from "./buttons";
import { products, times, fields, showCheck, delta } from "./optData";
import Link from "next/link";

let reasons = [
    {
        id: 1,
        reason: 'хотите заказать услугу'
    },
    {
        id: 2,
        reason: 'не знаете какой продукт подходит Вам'
    },
    {
        id: 3,
        reason: 'хотите узнать стоимость услуги'
    },
    {
        id: 4,
        reason: 'остались другие вопросы'
    }
]

export default function Contact () {
    return (
        <section id="5" className="shadow-section bg-white py-14 max-laptop:py-10 min-h-screen">
            <div className="wrapper flex flex-col gap-y-14 max-laptop:gap-y-10 max-mobile:gap-y-[30px] items-center">
                <ContactText />
                <ContactForm />
            </div>
        </section>
    )
}

function ContactText() {
    let [isHidden, setIsHidden] = useState(true);
        
    useEffect(function() {
        if (isHidden && window.innerHeight - delta > document.getElementById('contact-text').getBoundingClientRect().top) setIsHidden(false);
        else if (isHidden && window.innerHeight - delta < document.getElementById('contact-text').getBoundingClientRect().top) {
            let func = function (arg) {
                if (window.innerHeight - delta > document.getElementById('contact-text').getBoundingClientRect().top) {
                    setIsHidden(false)
                    clearInterval(arg);
                    return true
                } else return false;
            }
            showCheck(func);
        } else return
    }, [isHidden]);

    return (
        <div id='contact-text' className={`flex gap-10 flex-row transition-all duration-700 ${isHidden && 'opacity-0 translate-y-6'} max-laptop:gap-[30xp] max-[862px]:gap-5 max-[740px]:flex-col items-center`}>
            <p className="text-active-base font-base text-4xl max-laptop:text-[28px] max-[862px]:text-2xl max-mobile:text-xl"><span className="text-bright font-attention">Свяжитесь с нами</span>, если</p>
            <ul className="flex flex-col gap-y-5 max-mobile:gap-y-3">
                {reasons.map(reason => <Reason key={reason.id} reason={reason}/>)}
            </ul>
        </div>
    )
}

function ContactForm() {
    let [isHidden, setIsHidden] = useState(true);
    let [error, setError] = useState(null);
    let [isSuccess, setIsSuccess] = useState([false, null]);
    let [isPolicy, setIsPolicy] = useState(true);
    let [policyErr, setPolicyError] = useState(false);

    function changePolicy() {
        setIsPolicy(document.getElementById('policy').checked);
        if (document.getElementById('policy').checked) setPolicyError(false);
    }

    async function sendFormData(e) {
        e.preventDefault();
        if (!isPolicy) {
            setPolicyError(true);
            return;
        }
        let formData = new FormData(document.getElementById('orderCallForm'));
        let body = JSON.stringify(Object.fromEntries(formData));
        try {
            let res = await fetch(`/api/ordercall`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body
            })
            if (res.status == 200) {
                setError(null);
                setIsSuccess([true, Object.fromEntries(formData).time]);
            } else {
                setIsSuccess([false, null]);
                let err = (await res.json()).error;
                if (err) {
                    setError(err);
                } else {
                    setError('Проверьте корректность заполнения полей');
                }
            }
        } catch (e) {
            setError('Ошибка отправки формы');
        }
    }
        
    useEffect(function() {
        if (isHidden && window.innerHeight - delta > document.getElementById('contact-form').getBoundingClientRect().top) setIsHidden(false);
        else if (isHidden && window.innerHeight - delta < document.getElementById('contact-form').getBoundingClientRect().top) {
            let func = function (arg) {
                if (window.innerHeight - delta > document.getElementById('contact-form').getBoundingClientRect().top) {
                    setIsHidden(false)
                    clearInterval(arg);
                    return true
                } else return false;
            }
            showCheck(func);
        } else return
    }, [isHidden]);

    return(
        <div id="contact-form" className={`flex items-center transition-all duration-700 ${isHidden && 'opacity-0 translate-y-6'} gap-10 max-laptop:gap-5 flex-row max-tablet:flex-col w-full`}>
            <form id='orderCallForm' className="flex w-full flex-col items-start max-tablet:items-center gap-y-5" onSubmit={sendFormData}>
                <div className="grid grid-cols-2 max-laptop:grid-cols-1 w-full gap-5 max-laptop:gap-2.5">
                    <div className="flex flex-col gap-y-5 max-laptop:gap-y-2.5">
                        {fields.map(field => <InputField field={field} key={field.id}/>)}
                        {error != null && <label className="text-red-600 text-base max-laptop:text-sm">{error}</label>}
                    </div>
                    <textarea name="add" placeholder="Напишите, если есть, что дополнить" className="border-2 outline-none rounded-[10px] h-full min-h-[260px] max-small:min-h-[160px] px-5 max-mobile:px-4 py-4 max-mobile:py-3 border-base-color active:border-active-base focus:border-active-base placeholder:font-base"></textarea>
                </div>
                <div className="flex gap-2.5 items-center">
                    <input type="checkbox" id="policy" name="policy" defaultChecked onChange={changePolicy} className="appearance-auto w-4 h-4"/>
                    <label htmlFor='policy' className={`${policyErr && 'text-red-600'}`}>Ознакомлен(а) с <Link href={'https://st-152-fz.ru/index_polic.php?name=Николаенко%20Александр%20Иванович&site=creatieve.ru&email=nikol.alex06@mail.ru'} className={`underline`}>политикой конфиденциальности</Link> и принимаю условия обработки персональных данных</label>
                </div>
                {isSuccess[0] && <label className="text-landingfrom text-base max-laptop:text-sm max-tablet:text-xs">Вы заказали звонок на {isSuccess[1]}</label>}
                <BrightButton text={'Заказать звонок'}/>
            </form>
            <div className="w-min max-tablet:w-full h-[400px] max-tablet:h-auto flex flex-col max-tablet:flex-row gap-2.5 items-center">
                <div className="h-full max-tablet:h-px rounded w-px max-tablet:w-full bg-active-base"></div>
                <p className="text-base max-laptop:text-sm max-tablet:text-xs font-base text-active-base">или</p>
                <div className="h-full max-tablet:h-px rounded w-px max-tablet:w-full bg-active-base"></div>
            </div>
            <BrightButton link={"https://t.me/AliBabagg"} text={'Написать в Telegram'}/>
        </div>
    )
}

function InputField ({field}) {
    let className = "border-2 outline-none bg-white active:bg-white focus:bg-white rounded-[10px] px-5 max-mobile:px-4 py-4 max-mobile:py-3 border-base-color active:border-active-base focus:border-active-base placeholder:font-base placeholder:text-base";

    if (field.name != 'time') {
        return (
            <>
                {field.type != 'select' ? 
                    <input placeholder={field.placeholder} name={field.name} type={field.type} autoComplete='off' className={className}></input>
                :
                <>
                    <label className="text-base max-laptop:text-sm max-tablet:text-xs font-base text-dark-base">{field.placeholder}</label>
                    <select placeholder={field.placeholder} name={field.name} type={field.type} className={className}>
                        {products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
                        <option key={products.length + 1} value={'Свой проект'}>{'Свой проект'}</option>
                        <option key={products.length + 2} value={'Пока не решил'}>{'Пока не решил'}</option>
                    </select>
                </>
                }
            </>
        )
    }
    return (
        <>
            <label className="text-base max-laptop:text-sm max-tablet:text-xs font-base text-dark-base">{field.placeholder}</label>
            <select placeholder={field.placeholder} name={field.name} type={field.type} className={className}>
                {times.map(time => <option key={time.id} value={time.time}>{time.time}</option>)}
            </select>
        </>
        
    )
    
}

function Reason ({reason}) {
    return <li className="text-active-base font-base text-xl max-laptop:text-base max-[862px]:text-sm text-left max-[740px]:text-center">{reason.reason}</li>
}