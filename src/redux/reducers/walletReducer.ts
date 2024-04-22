import {
  WalletState,
  WalletActionTypes,
  ADD_BALANCE,
  SUBTRACT_BALANCE,
} from "../types/walletTypes";

const initialState: WalletState = {
  balance: 0,
};

const walletReducer = (
  state = initialState,
  action: WalletActionTypes
): WalletState => {
  switch (action.type) {
    case ADD_BALANCE:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case SUBTRACT_BALANCE:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
