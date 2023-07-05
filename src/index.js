import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { CategoryItem, Header } from "./components";
import CATEGORIES from "./constants/data/categories.json";
import { COLORS } from "./themes";
export default function App() {
  const onSelectedCategory = (categoryId) => {
    console.warn(categoryId);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Categories" />
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryItem {...item} onSelectedCategory={onSelectedCategory} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.containerCategory}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  containerCategory: {
    marginTop: 15,
    marginHorizontal: 15
  },
  listContainer: {
    gap: 15,
    paddingBottom: 20,
  }
});
