export interface WalletState {
  balance: number;
}

export const ADD_BALANCE = "ADD_BALANCE";
export const SUBTRACT_BALANCE = "SUBTRACT_BALANCE";

interface AddBalanceAction {
  type: typeof ADD_BALANCE;
  payload: number;
}

interface SubtractBalanceAction {
  type: typeof SUBTRACT_BALANCE;
  payload: number;
}

export type WalletActionTypes = AddBalanceAction | SubtractBalanceAction;
