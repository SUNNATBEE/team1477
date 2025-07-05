import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D1C29] text-white py-10 px-6 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="src/assets/logo.png"
              alt="1C-Tovary Logo"
              className="w-10 h-10 rounded-full"
            />
            <h3 className="text-lg font-semibold">1C-Товары</h3>
          </div>

          <p className="mb-2 text-gray-300">Линия консультации</p>
          <p className="text-lg font-bold text-white">+7(495)-111-00-10</p>

          <p className="mt-4 mb-1 text-gray-300">Наш e-mail</p>
          <p className="text-green-400">info@rozn.info</p>

          <button className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full">
            Заказать звонок
          </button>

          <p className="mt-4 text-gray-300">
            Для активации перейдите на{" "}
            <a href="https://portal.1c.ru/applications/1C-Goods" className="text-green-400 underline">
              portal.1c.ru
            </a>{" "}
            или обратитесь к Вашему партнеру 1С.
          </p>
          <p className="mt-2 text-gray-300">Инструкция по установке сервиса</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Информация</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline">Как это работает</a></li>
            <li><a href="#" className="hover:underline">Инструкции</a></li>
            <li><a href="#" className="hover:underline">Блог</a></li>
            <li><a href="#" className="hover:underline">О нас</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Продукты</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="text-green-400 hover:underline">
                1C-Ритейл Чекер Демо
              </a>
            </li>
            <li><a href="#" className="hover:underline">1C-Товары.Тестовый для магазина на 1 месяц</a></li>
            <li><a href="#" className="hover:underline">1C-Ритейл Чекер</a></li>
            <li><a href="#" className="hover:underline">1C-Товары 300</a></li>
            <li><a href="#" className="hover:underline">1C-Товары 30000</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 flex justify-between text-xs text-gray-400">
        <span>1C-Товары © 2023</span>
        <span>
          Сайт создан –{" "}
          <a href="https://wtstudio.ru" className="hover:underline">
            wtstudio.ru
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
