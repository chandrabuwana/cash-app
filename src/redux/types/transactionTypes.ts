export interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  createdAt?: string;
  type: "expense" | "income";
}

export interface TransactionState {
  transactions: Transaction[];
}

export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

interface AddTransactionAction {
  type: typeof ADD_TRANSACTION;
  payload: Transaction;
}

interface UpdateTransactionAction {
  type: typeof UPDATE_TRANSACTION;
  payload: Transaction;
}

interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  payload: string; // Transaction ID
}

export type TransactionActionTypes =
  | AddTransactionAction
  | UpdateTransactionAction
  | DeleteTransactionAction;
