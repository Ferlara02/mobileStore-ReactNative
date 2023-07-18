import { FlatList, SafeAreaView, View, useWindowDimensions } from "react-native";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import CATEGORIES2 from "../../constants/data/categories2.json";
import useOrientation from "../../hooks/useOrientation";


function Categories({ navigation, route }) {
  const orientation = useOrientation()
  const onSelectedCategory = (categoryId) => {
    navigation.navigate("Products", {categoryId})
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES2}
          renderItem={({ item }) => (
            <CategoryItem {...item} onSelectedCategory={onSelectedCategory} />
          )}
          keyExtractor={(item) => item.id}
          style={styles.containerCategory}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
