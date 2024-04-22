import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  bottomSheet: {
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f7f7fb",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedTab: {
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    height: height - 410,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  container: {
    paddingBottom: 30,
    padding: 20,
    height: 200,
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
  date: {
    fontSize: 12,
    textAlign: "right",
    color: "gray",
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
    color: "green", // Choose a color that stands out or matches your app theme
    fontWeight: "bold",
  },
});
