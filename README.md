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
Проект построен на основе паттерна **MVC (Model–View–Controller)** с использованием **брокера событий** как управляющего слоя, обеспечивающего связь между представлением и моделью данных.

### Значение частей

| Часть           | Назначение                                                              |
|-----------------|-------------------------------------------------------------------------|
| AppStateModel | Управляет состоянием приложения и бизнес-логикой                        |
| ItemsApi      | Выполняет HTTP-запросы к серверу (получение товаров, оформление заказа) |
| EventEmitter  | Обеспечивает подписку на изменения и оповещение компонентов             |
| UI-компоненты   | Отображают интерфейс и реагируют на изменения состояния                 |

---

## Базовые классы и их интерфейсы

### AppState
Главная модель приложения. Отвечает за хранение всех данных и реализацию бизнес-логики.

Интерфейс:
```
export interface AppState {
  items: Map<string, Item>;

  selectedProduct: Item | null;
  basket: Map<string, BasketItem>;
  basketTotalCount: number;
  basketTotalPrice: string;
  payment: PaymentMethod | null;
  address: string | null;
  email: string | null;
  phone: string | null;
  order: Order | null;

  openedModal: AppStateModals;
  isOrderReady: boolean;
  modalErrorMessage: string | null;

  loadItems(): Promise<void>;
  orderItems(): Promise<OrderResult | null>;

  selectProduct(id: string): void;
  addToBasket(id: string): void;
  removeFromBasket(id: string): void;
  setPaymentMethod(method: PaymentMethod): void;
  setAddress(address: string): void;
  isAddresAndPaymentValid(): boolean;
  setEmail(email: string): void;
  setPhone(phone: string): void;
  isContactsValid(): boolean;

  formatCurrency(value: number): string;

  openModal(modal: AppStateModals): void;
  setErrorMessage(message: string | null): void;
}
```
Основные поля класса:
- `items: Map<string, Item>` — список всех товаров
- `basket: Map<string, BasketItem>` — корзина
- `selectedProduct: Item | null` — выбранный товар
- `order: Order | null` — текущий заказ
- `payment`, `email`, `phone`, `address` — данные пользователя
- `basketTotalPrice`, `basketTotalCount` — агрегированные значения по корзине
- `openedModal` — активное модальное окно

Основные методы:
- `loadItems()` — загрузка данных с сервера
- `selectProduct(id: string)` — выбор товара
- `addToBasket(id: string)` / `removeFromBasket(id: string)` — управление корзиной
- `orderItems()` — оформление заказа
- `setEmail()`, `setPhone()`, `setAddress()` — установка пользовательских данных
- `setPaymentMethod()` — выбор способа оплаты
- `isAddresAndPaymentValid()`, `isContactsValid()` — валидация форм
- `setErrorMessage()` — установка текста ошибки
- `formatCurrency(value: number)` — форматирование цены
- `openModal(modal: AppStateModals)` — управление модальными окнами





