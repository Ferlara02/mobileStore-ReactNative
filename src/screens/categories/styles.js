import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginVertical: 10
  },
  container1:{
    height: 400
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary
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
  textFeatured: {
    fontFamily: "Poppins-Bold",
    fontSize: 17,
    marginTop: 15,
  },
  products: {
    flex: 1,
  },
  prodList:{
    paddingVertical: 15,
    gap: 15,
    alignItems: "center"
  },
});
