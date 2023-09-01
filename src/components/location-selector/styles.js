import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    alignItems: "center"
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.text,
    borderWidth: 0.5,
    marginVertical: 15
  },
  noLocation: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: "Poppins-Regular"
  },
  locationText: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: "Poppins-Regular"
  },
  title: {
    fontFamily: "Poppins-Bold"
  },
  addressText: {
    fontFamily: "Poppins-Regular",
    marginBottom: 10,
  },
});
