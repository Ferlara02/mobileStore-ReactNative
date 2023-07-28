import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerEmpty: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.text,
    padding: 10
  },
  listContainer: {
    flex: 1
  },
  footerContainer: {
    backgroundColor: COLORS.background,
    padding: 10,
    marginTop: 10
  },
  checkoutButton: {
    backgroundColor: COLORS.text,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center" ,
    borderRadius: 10
  },
  checkoutButtonText: {
    color: "white",
    fontFamily: "Poppins-Bold"
  },
  checkoutTotalContainer: {
    flexDirection: "row",
    gap: 8
  },
  totalText: {
    color: "white",
    fontFamily: "Poppins-Bold"
  },
  priceText: {
    color: "white",
    fontFamily: "Poppins-Bold"
  },
});
