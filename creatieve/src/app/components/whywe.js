let reasons = [
    {
        id: 1,
        title: 'Разработка уникального продукта',
        desc: 'Никаких шаблонов! Только уникальный дизайн и разработка с нуля. Проект будет разработан строго под ваши задачи.'
    },
    {
        id: 2,
        title: 'Гибкое формирование проекта',
        desc: 'Вы можете не только выбрать дополнительные услуги, но и заказать проект, который не подходит под описание наших услуг.'
    },
    {
        id: 3,
        title: 'Стоимость ниже рыночной',
        desc: 'Мы проанализировали рынок за вас. И, имея уникальную структуру работы внутри команды, мы можем предложить цены ниже рыночных.'
    }
];

let stages = [
    {
        id: 1,
        text: 'Общаемся с вами, формулируем задачи и цели'
    },
    {
        id: 2,
        text: 'Планируем разработку, составляем тз для каждого этапа'
    },
    {
        id: 3,
        text: 'Разрабатываем дизайн макет и функционал проекта'
    },
    {
        id: 4,
        text: 'Тестируем и разворачиваем проект'
    },
    {
        id: 5,
        text: 'Сопровождаем поностью функционирующий проект'
    }
]

export default function WhyWe() {
    return(
        <section className="shadow-section min-h-screen relative z-40 bg-active-base py-14 max-laptop:py-10">
            <div className="flex flex-col gap-14 max-laptop:gap-[30px] wrapper items-center">
                <h3 className="uppercase font-base text-4xl max-laptop:text-3xl max-tablet:text-2xl max-small:text-[22px] font-bold text-white">Почему <span className="text-bright">мы</span>?</h3>
                <div className="grid max-mobile:flex max-mobile:flex-col grid-cols-3 max-laptop:grid-cols-4 gap-10 max-laptop:gap-5">
                    {reasons.map(reason => <ReasonBlock key={reason.id} reason={reason}/>)}
                </div>
                <h4 className="text-white text-3xl max-laptop:text-2xl max-tablet:text-xl font-base">Прозрачный процесс разработки</h4>
                <ul className="relative flex flex-col gap-[30px] max-tablet:gap-5 items-start">
                    <div className="z-20 absolute border-dashed border-[3px] py-2 h-full left-[33px] max-laptop:left-7 max-mobile:left-[23px] border-bright"></div>
                    {stages.map(stage => <Stage key={stage.id} stage={stage}/>)}
                </ul>
            </div>
        </section>
    )
}

function ReasonBlock({reason}) {
    return(
        <div className={`p-[25px] max-mobile:p-5 bg-dark-base flex flex-col gap-y-10 max-laptop:gap-y-5 rounded-[10px] shadow-base col-span-1 max-laptop:col-span-2 ${reason.id == 3 && 'max-laptop:col-start-2'}`}>
            <div className="flex items-start gap-2">
                <span className="text-white text-3xl max-laptop:text-2xl max-tablet:text-xl font-base">{reason.id}.</span>
                <h4 className="text-white text-3xl max-laptop:text-2xl max-tablet:text-xl font-base">{reason.title}</h4>
            </div>
            <p className="text-white text-xl max-laptop:text-lg max-tablet:text-base">{reason.desc}</p>
        </div>
    )
}

function Stage({stage}) {
    return (
        <li className="relative z-30 flex gap-14 max-laptop:gap-5 items-center max-mobile:w-full">
            <div className="flex justify-center items-center w-[70px] max-laptop:w-[60px] max-mobile:w-[50px] min-w-[50px] mobile:min-w-[60px] laptop:min-w-[70px] h-[70px] max-laptop:h-[60px] max-mobile:h-[50px] min-h-[50px] mobile:min-h-[60px] laptop:min-h-[70px] rounded-full bg-bright">
                <span className="text-white font-base text-4xl max-laptop:text-3xl max-tablet:text-2xl">{stage.id}</span>
            </div>
            <p className="text-white font-base text-2xl max-laptop:text-xl max-tablet:text-base max-mobile:text-sm w-full max-w-fit text-wrap">{stage.text}</p>
        </li>
    )
}