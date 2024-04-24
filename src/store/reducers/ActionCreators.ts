import {AppDispatch} from "../store";
import {inventorySlice} from "./InventorySlice";
import {IInventory} from "../../models/IInventory";

export const fetchItems = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(inventorySlice.actions.inventoryFetching())
        dispatch(inventorySlice.actions.inventoryFetchingSuccess())
    } catch (e: any) {
        dispatch(inventorySlice.actions.inventoryFetchingError(e.message))
    }
}

export const addItemToInventory = (data: IInventory, cost: number) => async (dispatch: AppDispatch) => {
    dispatch(inventorySlice.actions.inventoryAddItem(data));
    dispatch(inventorySlice.actions.calculateBalanceSubtraction(cost));
    fetchItems();
}

export const sellItemFromInventory = (data: IInventory, index : number) => async (dispatch: AppDispatch) => {
    dispatch(inventorySlice.actions.inventorySellItem(index))
    dispatch(inventorySlice.actions.calculateBalanceAddition(data.cost))
    fetchItems();
}

export const sellAllItems = () => async (dispatch: AppDispatch) => {
    dispatch(inventorySlice.actions.inventorySellAllItems())
    fetchItems();
}

export const getFreeCoins = (amount: number) => async (dispatch: AppDispatch) => {
    dispatch(inventorySlice.actions.inventoryAddCoins(amount))
    fetchItems();
}