import "./globals.css";

export const metadata = {
  title: "Разработка недорогих сайтов под ключ в СПб",
  description: "Мы команда разработчиков CREATIEVE занимаемся разработкой и продвижением сайтов и веб-приложений различной сложности под ключ по ценам ниже рынка",
  keywords: "разработка сайта под ключ, купить сайт санкт петербург, сайт недорого, заказать сайт под ключ, сайт под ключ недорого, заказать сайт кодом, заказать сайт компании, одностраничный сайт под ключ, заказать разработку сайта под ключ, разработка сайта под ключ недорого, web сайт под ключ",
  robots: "index,follow",
  author: "Alexander, nikol.alex06@mail.ru",
  replyTo: "nikol.alex06@mail.ru",
  url: "https://creatieve.ru",
  identifierURL: "https://creatieve.ru"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
