import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contView: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    margin: 7,
    padding: 10,
    borderWidth: 1,
    width: 130,
    alignItems: "center",
    backgroundColor: COLORS.primary
  },
  buttonDisabled: {
    margin: 7,
    padding: 10,
    borderWidth: 1,
    width: 130,
    alignItems: "center",
    backgroundColor: "grey"
  },
  containerPlaces: {
    marginTop: 20,
    alignItems: "center"
  },
  titlePlaces: {
    fontFamily: "Poppins-Bold",
    fontSize: 18
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: COLORS.primary,
    alignItems: "center"
  },
  image: {
    width: 80,
    height: 80
  },
  mapImage: {},
  detail: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  detailText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,

  },
});
