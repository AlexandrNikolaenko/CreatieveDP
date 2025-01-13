export const sectionsId = [
    {
        id: 1,
        name: 'about'
    },
    {
        id: 2,
        name: 'products'
    },
    {
        id: 3,
        name: 'whywe'
    },
    {
        id: 4,
        name: 'portfolio'
    },
    {
        id: 5,
        name: 'contact'
    },
];

export default function scrollToBlock(blockId) {
    let block = document.getElementById(`${blockId}`);
    if (block) {
        window.scroll({
            top: block.getBoundingClientRect().top + window.scrollY,
            left: 0,
            behavior: "smooth"
        })
    }
}

export const products = [
    {
        id: 1,
        name: 'Landing page',
        cost: '39 900 ₽',
        time: '5',
        description: 'Landing page — это одностраничный веб-сайт, созданный с целью привлечения клиентов. Обычно содержит информацию о продукте и призыв к действию.',
        fullDesc: 'Лендинг пэйдж (или целевая страница) — это веб-страница, созданная с целью привлечения внимания посетителей и побуждения их к конкретному действию, например, покупке товара, подписке на рассылку или заполнению формы. Обычно лендинг пэйдж имеет удерживающий внимание дизайн и сосредоточен на одной конкретной цели, что позволяет снизить количество отвлекающих факторов и повысить конверсию.',
        activeBg: 'landingBlock',
        examples: [
            {
                id: 1,
                name: 'https://deepai.ru/'
            },
            {
                id: 2,
                name: 'https://aigitalpro.ru/'
            },
            {
                id: 3,
                name: 'https://mnogometrov.ru/'
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
            }
        ]
    },
    {
        id: 2,
        name: 'Корпоративный сайт',
        cost: '34 900 ₽',
        time: '5',
        description: 'Корпоративный сайт — это веб-ресурс, представляющий компанию, её продукты. Он служит для информирования посетителей о деятельности компании. Корпоративный сайт помогает укрепить имидж и улучшить коммуникацию с аудиторией.',
        fullDesc: 'Корпоративный сайт — это веб-ресурс, созданный для представления компании, ее деятельности, продуктов и услуг и включающий в себя информацию о самой кома\пании, ее новости, клиентскую поддержку раздел карьеры и другое. Он служит важным инструментом для взаимодействия с клиентами, партнерами и сотрудниками. \n Корпоративный сайт помогает создать имидж компании, улучшить ее видимость в интернете и установить доверительные отношения с клиентами и партнерами.',
        activeBg: 'siteBlock',
        examples: [
            {
                id: 1,
                name: 'https://www.gazprom.ru/'
            },
            {
                id: 2,
                name: 'https://mdcplus.fi/'
            },
            {
                id: 3,
                name: 'https://suzmk.pro/'
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
            }
        ]
    },
    {
        id: 3,
        name: 'Веб-приложение',
        cost: '39 900 ₽',
        time: '7',
        description: 'Веб-приложение — это программа, которая работает в веб-браузере и предоставляет пользователям определенные функции через интернет. Оно доступно с любого устройства с подключением к сети и не требует установки на устройтсве.',
        fullDesc: 'Веб-приложение — это интерактивное программное обеспечение, которое функционирует в веб-браузере и предоставляет пользователям возможности, аналогичные традиционным десктопным приложениям. Оно доступно из любого места и на любом устройстве с интернет-соединением, что устраняет необходимость в установке дополнительного программного обеспечения. Благодаря своей интерактивности, веб-приложения могут реагировать на действия пользователей в реальном времени и предлагать удобный интерфейс.',
        activeBg: 'appBlock',
        examples: [
            {
                id: 1,
                name: 'http://olimpeducation.ru/'
            },
            {
                id: 2,
                name: 'https://online.sberbank.ru/'
            },
            {
                id: 3,
                name: 'https://spb.hh.ru/'
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
            }
        ]
    },
    {
        id: 4,
        name: 'Сайт визитка',
        cost: '19 900 ₽',
        time: '4',
        description: 'Сайт-визитка — одностраничный веб-сайт, представляющий компанию. Содержит основную информацию о деятельности,  контактные данные, часто портфолио или отзывы. Его цель — быстро и эффективно донести информацию до потенциальных клиентов и облегчить связь с ними.',
        fullDesc: 'Сайт-визитка — это простой веб-сайт, который служит для представления информации о человеке, компании или услуге. Он обычно состоит из нескольких страниц и содержит основную информацию. \n Сайты-визитки часто используются малым бизнесом, фрилансерами и специалистами для создания онлайн-присутствия и привлечения клиентов. Они обычно имеют простой дизайн и легко настраиваются, что делает их доступными для создания даже без глубоких знаний в веб-разработке.',
        activeBg: 'visitBlock',
        examples: [
            {
                id: 1,
                name: 'https://data-fusion.ru/'
            },
            {
                id: 2,
                name: 'https://smoldok.com/'
            },
            {
                id: 3,
                name: 'https://oee-conf.ru/materials/'
            }
        ],
        add: [
            {
                id: 1,
                service: '',
                price: ''
            }
        ]
    }
];

export const times = [
    {
        id: 1,
        time: '10:00-11:00'
    },
    {
        id: 2,
        time: '11:00-12:00'
    },
    {
        id: 3,
        time: '12:00-13:00'
    },{
        id: 4,
        time: '13:00-14:00'
    },
    {
        id: 5,
        time: '14:00-15:00'
    },
    {
        id: 6,
        time: '15:00-16:00'
    },
    {
        id: 7,
        time: '16:00-17:00'
    },
    {
        id: 8,
        time: '17:00-18:00'
    },
    {
        id: 9,
        time: '18:00-19:00'
    },
    {
        id: 10,
        time: '19:00-20:00'
    },
    {
        id: 11,
        time: '20:00-21:00'
    },
    {
        id: 12,
        time: 'Любое время'
    }
];

export const fields = [
    {
        id: 1,
        name: 'name',
        type: '',
        placeholder: 'Как к вам обращаться?'
    },
    {
        id: 2,
        name: 'product',
        type: 'select',
        placeholder: 'Какой продукт вас интересует?'
    },
    {
        id: 3,
        name: 'time',
        type: 'time',
        placeholder: 'Укажите удобное время'
    },
    {
        id: 4,
        name: 'tel',
        type: 'tel',
        placeholder: 'Ваш номер телефона'
    }
];
