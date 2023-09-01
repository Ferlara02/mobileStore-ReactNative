import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    margin: 7,
    padding: 10,
    borderWidth: 1,
    width: 130,
    alignItems: "center",
    backgroundColor: COLORS.primary
  }
});
