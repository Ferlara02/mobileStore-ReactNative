import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";
export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catTitle: {
    padding: 7,
    marginBottom: 7,
    width: "100%",
    color: COLORS.primary,
    fontFamily:"Poppins-Bold",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: COLORS.secondary
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7
  },
  products: {
    flex: 1,
  },
  prodList:{
    paddingVertical: 15,
    gap: 15,
    alignItems: "center"
  },
  iconClear: {
    position: "absolute",
    zIndex: 2,
    right: 5
  },
  notFound: {
    position: "absolute",
    top: 150,
    left: 10
  },
});
