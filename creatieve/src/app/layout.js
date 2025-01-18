import "./globals.css";
import localFont from 'next/font/local';

const dela = localFont({
  src: '../../public/fonts/dela-gothic-one-v17-cyrillic_latin-regular.woff2'
});

const unbounded = localFont({
  src: [
    {
      path: '../../public/fonts/unbounded-v8-cyrillic_latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/unbounded-v8-cyrillic_latin-700.woff2',
      weight: '700',
      style: 'normal',
    }
  ]
});

const shantell = localFont({
  src: [
    {
      path: '../../public/fonts/shantell-sans-v10-cyrillic_latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/shantell-sans-v10-cyrillic_latin-700italic.woff2',
      weight: '700',
      style: 'italic',
    }
  ]
})

const montserrat = localFont({
  src: '../../public/fonts/montserrat-v29-cyrillic_latin-regular.woff2'
});


export const metadata = {
  title: "Разработка недорогих сайтов под ключ в СПб",
  description: "Мы команда разработчиков CREATIEVE занимаемся разработкой и продвижением сайтов и веб-приложений различной сложности под ключ по ценам ниже рынка",
  keywords: "разработка сайта под ключ, купить сайт санкт петербург, сайт недорого, заказать сайт под ключ, сайт под ключ недорого, заказать сайт кодом, заказать сайт компании, одностраничный сайт под ключ, заказать разработку сайта под ключ, разработка сайта под ключ недорого, web сайт под ключ",
  other: {
    ['robots']: "index,follow",
    ['author']: "Alexander, nikol.alex06@mail.ru",
    ['replyTo']: "nikol.alex06@mail.ru",
    ['url']: "https://creatieve.ru",
    ['identifierURL']: "https://creatieve.ru",
    ['yandex-verification']: "8df417d384e5203c"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dela.className} ${unbounded.className} ${shantell.className} ${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
