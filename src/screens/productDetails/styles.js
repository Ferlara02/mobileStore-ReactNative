import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  container2: {
    paddingVertical: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.text,
  },
  prodImage: {
    width: "40%",
    height: 150,
  },
  containerTitle: {
    margin: 10,
  },
  prodTitle: {
    fontSize: 15,
    fontFamily: "Poppins-Bold",
    width: 180,
  },
  prodPrice: {
    marginVertical: 10,
    fontSize: 17,
    fontFamily: "Poppins-Bold",
  },
  container3: {
    padding: 10,
    justifyContent: "center",
  },
  prodDescription: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  features: {
    marginTop: 15,
    fontSize: 13,
    fontFamily: "Poppins-Bold",
  },
  feature: {
    marginVertical: 7,
    fontSize: 11,
    fontFamily: "Poppins-Regular",
  },
  containerButton: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addCartButton: {
    width: "80%",
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  addToCartText: {
    fontFamily: "Poppins-Bold"
  }
});
