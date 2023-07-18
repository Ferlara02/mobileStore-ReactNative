import { useFonts } from "expo-font";
import { useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS } from "./themes";
import { Header } from "./components";
import RootNavigation from "./navigation";

export default function App() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf")
  });
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const headerTitle = isCategorySelected ? "Products" : "Categories";
  // const onHandleSelectCategory = (categoryId) => {
  //   setSelectedCategory(categoryId);
  //   setIsCategorySelected(!isCategorySelected);
  // };

  if(!loaded) {
    return(
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.text} size={40}/>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* <Header title={headerTitle} /> */}
        <RootNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
