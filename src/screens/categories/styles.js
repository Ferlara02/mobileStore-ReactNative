import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerCategory: {
    marginTop: 15,
    marginHorizontal: 15,

  },
  listContainer: {
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
});