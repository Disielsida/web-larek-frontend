# Проектная работа "Веб-ларек"
**Веб-ларек** — одностраничное веб-приложение, реализующее базовый функционал интернет-магазина: просмотр каталога товаров, добавление в корзину, оформление и подтверждение заказа.

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Архитектура проекта
Приложение построено по архитектурному паттерну **MVC(Model–View–Controller)** с использованием управляющего слоя в виде брокера событий.

## Типы данных, приходящих c сервера
```
export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
} // продукт

export interface IProductList<T> {
  total: number;
  items: T[];
} // универсальный список продуктов

export interface IOrder {
  id: string;
  total: number;
} // созданный заказ при успешном post-запросе
```



