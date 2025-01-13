'use client'

import { useState } from "react";
import { BrightButton } from "./buttons";
import { products, times, fields } from "./optData";
import { host } from "./host";

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
    let [error, setError] = useState(null);
    let [isSuccess, setIsSuccess] = useState([false, null]);
    console.log(error, isSuccess);

    async function sendFormData(e) {
        e.preventDefault();
        console.log('done');
        let formData = new FormData(document.getElementById('orderCallForm'));
        let body = JSON.stringify(Object.fromEntries(formData));
        let res = await fetch(`http://${host}:5000/ordercall`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body
        })
        if (res.status == 200) {
            console.log('done')
            setError(null);
            setIsSuccess([true, Object.fromEntries(formData).time]);
        } else {
            setIsSuccess([false, null]);
            let err = (await res.json()).error;
            if (err) {
                setError(err);
            } else {
                setError('Проверьте корректность заполнения полей')
            }
        }
    }

    return (
        <section id="5" className="shadow-section bg-white py-14 max-laptop:py-10 min-h-screen">
            <div className="wrapper flex flex-col gap-y-14 max-laptop:gap-y-10 max-mobile:gap-y-[30px] items-center">
                <div className="flex gap-10 flex-row max-laptop:gap-[30xp] max-[862px]:gap-5 max-[740px]:flex-col items-center">
                    <p className="text-active-base font-base text-4xl max-laptop:text-[28px] max-[862px]:text-2xl max-mobile:text-xl"><span className="text-bright font-attention">Свяжитесь с нами</span>, если</p>
                    <ul className="flex flex-col gap-y-5 max-mobile:gap-y-3">
                        {reasons.map(reason => <Reason key={reason.id} reason={reason}/>)}
                    </ul>
                </div>
                <div className="flex items-center gap-10 max-laptop:gap-5 flex-row max-tablet:flex-col w-full">
                    <form id='orderCallForm' className="flex w-full flex-col items-start max-tablet:items-center gap-y-5" onSubmit={(e) => {
                        console.log('done');
                        sendFormData(e)}}>
                        {isSuccess[0] && <label className="text-landingfrom text-base max-laptop:text-sm max-tablet:text-xs">Вы заказали звонок на {isSuccess[1]}</label>}
                        <div className="grid grid-cols-2 max-laptop:grid-cols-1 w-full gap-5 max-laptop:gap-2.5">
                            <div className="flex flex-col gap-y-5 max-laptop:gap-y-2.5">
                                {fields.map(field => <InputField field={field} key={field.id}/>)}
                                {error != null && <label className="text-red-600 text-base max-laptop:text-sm">{error}</label>}
                            </div>
                            <textarea name="add" placeholder="Напишите, если есть, что дополнить" className="border-2 outline-none rounded-[10px] h-full min-h-[260px] max-small:min-h-[160px] px-5 max-mobile:px-4 py-4 max-mobile:py-3 border-base-color active:border-active-base focus:border-active-base placeholder:font-base"></textarea>
                        </div>
                        <BrightButton text={'Заказать звонок'}/>
                    </form>
                    <div className="w-min max-tablet:w-full h-[400px] max-tablet:h-auto flex flex-col max-tablet:flex-row gap-2.5 items-center">
                        <div className="h-full max-tablet:h-px rounded w-px max-tablet:w-full bg-active-base"></div>
                        <p className="text-base max-laptop:text-sm max-tablet:text-xs font-base text-active-base">или</p>
                        <div className="h-full max-tablet:h-px rounded w-px max-tablet:w-full bg-active-base"></div>
                    </div>
                    <BrightButton link={"https://t.me/AliBabagg"} text={'Написать в Telegram'}/>
                </div>
            </div>
        </section>
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