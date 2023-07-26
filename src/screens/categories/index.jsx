import { ActivityIndicator, FlatList, SafeAreaView, View, useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import useOrientation from "../../hooks/useOrientation";
import { useGetCategoriesQuery } from "../../store/categories/apis";
import { COLORS } from "../../themes";
function Categories({ navigation, route }) {
  const { data, error, isLoading } = useGetCategoriesQuery();
  const orientation = useOrientation();
  // const categories = useSelector((state) => state.categories.data);
  const onSelectedCategory = (categoryId) => {
    navigation.navigate("Products", { categoryId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.text} style={styles.containerCategory}/>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CategoryItem {...item} onSelectedCategory={onSelectedCategory} />
            )}
            keyExtractor={(item) => item.id}
            style={styles.containerCategory}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default Categories;
