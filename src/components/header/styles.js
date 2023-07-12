import { StyleSheet, StatusBar } from "react-native";

import { COLORS } from "../../themes";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    marginTop: StatusBar.currentHeight,
    fontSize: 20,
    color: COLORS.text,
    fontFamily: "Poppins-Bold",
  },
});
