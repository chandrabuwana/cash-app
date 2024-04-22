import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  walletContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleBalance: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
  },
  amount: {
    textAlign: "center",
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
  },
  wrapperWallet: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: "green",
    height: 44,
    width: "50%",
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    backgroundColor: "#2AB784",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  wrapperTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    width: "100%",
    gap: 20,
  },
  totalExpense: {
    backgroundColor: "#FD5662",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: "48%",
    height: 70,
  },

  labelExpense: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  totalIncome: {
    backgroundColor: "#2AB784",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 20,
    width: "48%",
    height: 70,
  },
  icon: {
    width: 35,
    height: 35,
  },
  wrapperSideContent: {
    paddingTop: 20,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  totalExpenseSide: {
    backgroundColor: "#FD5662",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "80%",
    height: 70,
  },
  totalIncomeSide: {
    backgroundColor: "#2AB784",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    gap: 5,
    borderRadius: 20,
    width: "80%",
    height: 70,
  },
});
