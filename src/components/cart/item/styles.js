import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: COLORS.primary,

    elevation: 3,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 15
  },
  imageContainer: {
    maxWidth: 120,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  detailContainer: {
    justifyContent: "space-between",
    maxWidth: 190
  },
  image: {
    width: 100,
    height: 100
  },
  deleteContainer: {
  },
  name: {
    fontSize: 12,
    fontFamily: "Poppins-Regular"
  },
  price: {
    fontSize: 12,
    fontFamily: "Poppins-Regular"
  },
  qty: {
    fontSize: 12,
    fontFamily: "Poppins-Regular"
  },
  stock: {
    fontSize: 12,
    fontFamily: "Poppins-Regular"
  },
  actionContainer: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  increaseButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 20
  },
  decreaseButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 20
  }
});
