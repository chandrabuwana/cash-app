import {
  ADD_BALANCE,
  SUBTRACT_BALANCE,
  WalletActionTypes,
} from "../types/walletTypes";

export const addBalance = (amount: number): WalletActionTypes => ({
  type: ADD_BALANCE,
  payload: amount,
});

export const subtractBalance = (amount: number): WalletActionTypes => ({
  type: SUBTRACT_BALANCE,
  payload: amount,
});
