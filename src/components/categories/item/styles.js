import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    width: "45%",
    height: 140
  },
  imageBackground: {
    width: "100%",
    height: 130,
    justifyContent: "flex-end",
  },
  imageBackgroundTablet: {
    width: "100%",
    height: 250,
  },
  categoryName: {
    fontSize: 15,
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
    padding: 20,
    textShadowColor: "rgba(0,0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6
  },
  categoryNameTablet: {
    fontSize: 40,
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
    padding: 20,
    textShadowColor: "rgba(0,0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6
  }
});
