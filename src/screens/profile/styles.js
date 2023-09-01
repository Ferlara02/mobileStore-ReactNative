import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 6
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  loading: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "Poppins-Bold"
  },
  addressText: {
    fontFamily: "Poppins-Regular"
  },
  changeAddress: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  }
});
