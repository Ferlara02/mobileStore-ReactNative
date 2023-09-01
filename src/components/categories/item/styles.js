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
    width: "45%",
    height: 160,
  },
  container2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTablet: {
    width: "45%",
    height: 100,
    margin: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageBackground: {
    width: "100%",
    height: 110,
    justifyContent: "flex-end",
  },
  imageBackgroundTablet: {
    width: 70,
    height: 100
  },
  categoryName: {
    fontSize: 17,
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
    padding: 10,
    textShadowColor: "rgba(0,0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6
  },
  categoryNameTablet: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
    padding: 20,
    textShadowColor: "rgba(0,0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6
  }
});
