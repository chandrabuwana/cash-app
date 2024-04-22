import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleModal: {
    fontSize: 20,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  input: {
    marginVertical: 20,
    borderRadius: 4,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonAdd: {
    width: "40%",
    backgroundColor: "#2AB784",
    padding: 10,
    borderRadius: 8,
    color: "white",
  },
  titleAdd: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  buttonCancel: {
    width: "40%",
    backgroundColor: "#FD5662",
    padding: 10,
    borderRadius: 8,
    color: "white",
  },
  titleCancel: {
    color: "white",
  },
  wrapperRadio: {
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F1F1FA",
    padding: 2,
    borderRadius: 8,
  },
  wrapperSubmit: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  labelTransaction: {
    marginBottom: 20,
  },
});
