// Интерфесы для данных, приходящих с сервера
// 1 товар
export interface Item {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

// Ответ от сервера после оформления заказа
export interface OrderResult {
  id: string;
  total: number;
}


//Интерфейс заказа, отправляемого на сервер
export interface Order {
  payment: PaymentMethod;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}


// Интерфейс для работы с API
export interface ItemsApi {
  getItems(): Promise<Item[]>;
  orderItems(order: Order): Promise<OrderResult | null>;
}


//Слой модели приложения
//Модальные окна
export enum AppStateModals {
  product = 'modal:product',
  basket = 'modal:basket',
  payment = 'modal:payment',
  contact = 'modal:contacts',
  success = 'modal:success',
  none = 'modal:none',
}

//События, на которые подписывается приложение
export enum AppStateChanges {
  products = 'change:products',
  modal = 'change:modal',
  modalErrorMessage = 'change:modalMessage',
  basket = 'change:basket',
  order = 'change:order',
}

//Метод оплаты
export type PaymentMethod = 'cash' | 'online';

//Товар в корзине
export interface BasketItem {
  id: string;
  title: string;
  priceText: string;
}

//Основная модель
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

//Настройки для модели
export interface IAppStateSettings { 
  onChange: (change: AppStateChanges) => void;
}

// Конструктор модели
export interface AppStateConstructor {
  new (api: ItemsApi, settings: IAppStateSettings): AppState;
}


//Слой отображения
//Базовый интерфейс отображения
export interface IView<T, S extends object> {
  element: HTMLElement;
  copy(settings: S): IView<T, S>;
  render(data?: Partial<T>): HTMLElement;
}

//Конструктор отображения
export interface IViewConstructor<T, S extends object> {
  new (root: HTMLElement, settings: S): IView<T, S>;
}

//События для работы с элементами
//События для кликабельных элементов
export type IClickableEvent<T> = { event: MouseEvent; item?: T };
export interface IClickable<T> {
	onClick: (args: IClickableEvent<T>) => void;
}

//События для изменяемых элементов
export type IChangeableEvent<T> = { event: Event; value?: T };
export interface IChangeable<T> {
	onChange: (args: IChangeableEvent<T>) => void;
}

//События для селектируемых элементов
export type ISelectableEvent<T> = { event: Event; value?: T };
export interface ISelectable<T> {
	onSelect: (args: ISelectableEvent<T>) => void;
}


//Пример отображения конкретного товара – карточки товара
//Категории товаров
export enum ItemCategory {
  softSkill = 'софт-скилл',
  other = 'другое',
  extra = 'дополнительно',
  button = 'кнопка',
  hardSkill = 'хард-скилл',
}

//Данные для отображения товара
export interface itemData {
  id: string;
  category: ItemCategory;
  title: string;
  image: string;
  priceText: string;
}

//Настройки для отображения товара(селекторы + OnClick)
export interface itemSettings extends IClickable<string> {
  category: string;
  title: string;
  image: string;
  priceText: string;
}
