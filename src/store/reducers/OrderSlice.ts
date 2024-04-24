import {IOrder} from "../../models/IOrder";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface OrderState {
    orders: IOrder[];
    isLoading: boolean;
    error: string;
}

const initialState: OrderState = {
    orders: [
        {
            user: 'Геннадий',
            phoneNumber: '375 25 555 55 55',
            status: 'created',
            date: '12.08.2023',
            address: 'Парковая 1',
            amount: 25,
            price: 200,
            deliveryPrice: 100,
            totalPrice: 300,
            comment: 'быстрее',
            productName: 'Двигло',
            sku: '912497129471264061',
            productComment: 'rekjgnerjknrg',
        },
    ],
    isLoading: false,
    error: '',
}

interface Clients {
    id: number,
    name: string,
    address: string,
    phone: string,
}

export const clients: Clients[] = [
    {
        id: 2,
        name: "АВИАЦ",
        address: "123182, г Москва, р-н Щукино, ул Авиационная, д 24",
        phone: "74951500320"
    },
    {
        id: 4,
        name: "АГ",
        address: "105122, г Москва, р-н Измайлово, ул Советская, д 80 стр 1",
        phone: "74993227074"
    },
    {
        id: 5,
        name: "АДЦ",
        address: "125476, г Москва, р-н Южное Тушино, ул Василия Петушкова, д 3 к 3 стр 1",
        phone: "79166073099"
    },
    {
        id: 7,
        name: "АЙВ",
        address: "г Москва, МКАД 55-й км",
        phone: "79255986522"
    },
    {
        id: 11,
        name: "БВС",
        address: "119361, г Москва, р-н Раменки, ул Лобачевского, д 110 к 1",
        phone: "79689108944"
    },
    {
        id: 12,
        name: "БВЮ",
        address: "115583, г Москва, Орехово-Борисово Южное р-н, Каширское шоссе, д 67 стр 14",
        phone: "79163777728"
    },
    {
        id: 13,
        name: "БЕК",
        address: "125239, г Москва, р-н Коптево, 3-й Михалковский пер, д 20 к 2",
        phone: "79067660808"
    },
    {
        id: 15,
        name: "БС",
        address: "127490, г Москва, ул Декабристов, д 45Б стр 2",
        phone: "79039760045"
    },
    {
        id: 16,
        name: "БСПП",
        address: "Ставропольский край, г Пятигорск, Бештаугорское шоссе",
        phone: "79282228500"
    },
    {
        id: 17,
        name: "БУ",
        address: "105118, г Москва, р-н Соколиная Гора, ул Буракова, д 27 к 5",
        phone: "79268611932"
    },
    {
        id: 18,
        name: "П-БАМ",
        address: "119330, г Москва, р-н Раменки, ул Мосфильмовская, д 54 стр 3",
        phone: "79266902085"
    },
    {
        id: 23,
        name: "ДАВ",
        address: "125371, г Москва, р-н Покровское-Стрешнево, Волоколамское шоссе, д 116",
        phone: "79252588458"
    },
    {
        id: 24,
        name: "ДАНДИ",
        address: "117463, г Москва, р-н Ясенево, Новоясеневский пр-кт, д 42 стр 9",
        phone: "79661791177"
    },
    {
        id: 25,
        name: "ДВИН",
        address: "127018, г Москва, р-н Марьина роща, ул Двинцев, д 12 к 1, помещ 1А/1",
        phone: "79851799557"
    },
    {
        id: 27,
        name: "ДИ",
        address: "117105, г Москва, Нагорный р-н, Нагорный проезд, д 7 стр 13",
        phone: "79265790833"
    },
    {
        id: 28,
        name: "ДП",
        address: "117574, г Москва, р-н Ясенево, Новоясеневский пр-кт, д 8А",
        phone: "79296926022"
    },
    {
        id: 29,
        name: "А-ЗЕВС",
        address: "127591, г Москва, р-н Восточное Дегунино, ул Дубнинская, д 79Б",
        phone: "79778000559"
    },
    {
        id: 31,
        name: "ИС",
        address: "Московская обл, г Балашиха, шоссе Энтузиастов, стр 2",
        phone: "79251864626"
    },
    {
        id: 32,
        name: "КИЕВ",
        address: "121059, г Москва, р-н Дорогомилово, ул Киевская, д 8",
        phone: "79262778890"
    },
    {
        id: 33,
        name: "КЕЙ-КЕЙ",
        address: "109052, г Москва, Нижегородский р-н, ул Новохохловская, д 12 стр 3",
        phone: "79265721255"
    }
]

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordersFetching(state) {
            state.isLoading = true;
        },
        ordersFetchingSuccess(state) {
            state.isLoading = false;
            state.error = ''
            state.orders = [...state.orders];
        },
        ordersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        ordersChangeStatusToRejected(state, action: PayloadAction<number>){
            state.orders[action.payload].status = 'rejected';
        },
        ordersChangeStatusToComplete(state, action: PayloadAction<number>){
            state.orders[action.payload].status = 'closed';
        },
        ordersAddOrder(state, action: PayloadAction<IOrder>) {
            state.orders = [...state.orders, action.payload]
        }
    }
})

export default orderSlice.reducer;