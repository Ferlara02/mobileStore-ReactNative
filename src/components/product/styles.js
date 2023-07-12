import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";
export const styles = StyleSheet.create({
  productContainer: {
    padding: 0,
    marginHorizontal: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: 160,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  prodImage: {
    width: "100%",
    height: 130,
  },
  textProd: {
    textAlign: "center",
    margin: 4,
    fontFamily: "Poppins-Regular",
  },
  prodPriceRating: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: "black",
    borderRadius: 7,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 8
  },
  price: {
    fontSize: 18,
    fontFamily: "Poppins-Bold"
  },
  rating: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  }

});
