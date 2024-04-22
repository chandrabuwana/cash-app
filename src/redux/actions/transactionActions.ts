import { Dispatch } from "@reduxjs/toolkit";
import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  Transaction,
  TransactionActionTypes,
} from "../types/transactionTypes";
import { addBalance, subtractBalance } from "./walletActions";

export const addTransaction = (transaction: Transaction) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });

    if (transaction.type === "income") {
      dispatch(addBalance(transaction.amount));
    } else if (transaction.type === "expense") {
      dispatch(subtractBalance(transaction.amount));
    }
  };
};
export const updateTransaction = (
  transaction: Transaction
): TransactionActionTypes => ({
  type: UPDATE_TRANSACTION,
  payload: transaction,
});

export const deleteTransaction = (id: string): TransactionActionTypes => ({
  type: DELETE_TRANSACTION,
  payload: id,
});
