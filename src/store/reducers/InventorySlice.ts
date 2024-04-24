import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInventory} from "../../models/IInventory";

interface InventoryState {
    items: IInventory[];
    balance: number;
    isLoading: boolean;
    error: string;
}

const initialState: InventoryState = {
    items: [],
    balance: 0,
    isLoading: false,
    error: '',
}

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        inventoryFetching(state) {
            state.isLoading = true;
        },
        inventoryFetchingSuccess(state) {
            state.isLoading = false;
            state.error = ''
            state.items = [...state.items];
        },
        inventoryFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        inventoryAddItem(state, action: PayloadAction<IInventory>) {
            state.items = [...state.items, action.payload];
        },
        inventorySellItem(state, action: PayloadAction<number>) {
            let currentInventory = [...state.items];
            currentInventory.splice(action.payload, 1);
            state.items = [...currentInventory]
        },
        inventorySellAllItems(state) {
            const sumAll = state.items.reduce(
                (accumulator, currentValue) => accumulator + currentValue.cost,
                0,
            );
            state.balance += sumAll;
            state.items = [];
        },

        calculateBalanceSubtraction(state, action: PayloadAction<number>) {
            state.balance -= action.payload;
        },
        calculateBalanceAddition(state, action: PayloadAction<number>) {
            state.balance += action.payload;
        },
        inventoryAddCoins(state, action: PayloadAction<number>) {
            state.balance += action.payload;
        },
    }
})

export default inventorySlice.reducer;