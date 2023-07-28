import { StyleSheet } from "react-native";

import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderItem: {
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
    gap: 15,
  },
  orderHeaderContainer: {
    flex: 1
  },
  orderItemDate: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: COLORS.text,
    
  },
  orderItemId: {},
  orderItemTotal: {},
});
