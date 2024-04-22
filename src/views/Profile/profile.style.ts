import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    padding: 20,
    height: height,
    width: "100%",
  },
  labelAll: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  wrapperScrollView: {
    paddingBottom: 30,
    // padding: 20,
    flex: 1,
    flexGrow: 1,
    // maxHeight: 800,
    width: "100%",
  },
  transaction: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    gap: 10,
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "grey",
  },
  iconText: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    textAlign: "right",
    color: "gray",
  },
  wrapperLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
