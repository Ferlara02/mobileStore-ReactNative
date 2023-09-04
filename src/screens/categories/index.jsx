import { ActivityIndicator, FlatList, ScrollView, View, Text, ImageBackground } from "react-native";

import { styles } from "./styles";
import { CategoryItem, Product } from "../../components";
import useOrientation from "../../hooks/useOrientation";
import { useGetCategoriesQuery } from "../../store/categories/apis";
import { useGetFeaturedProductsQuery } from "../../store/products/apis";
import { COLORS } from "../../themes";

function Categories({ navigation, route }) {
  const { data, error, isLoading } = useGetCategoriesQuery();
  const { data: movieData, isLoading: movieLoading } = useGetFeaturedProductsQuery(true);

  const orientation = useOrientation();
  // const categories = useSelector((state) => state.categories.data);
  const onSelectedCategory = (categoryId) => {
    navigation.navigate("Products", { categoryId });
  };
  const onSelectProduct = ({ productId, name }) => {
    navigation.navigate("ProductDetail", { productId, name });
  };
  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.text} style={styles.containerCategory} />
      ) : (
        <>
          <View style={styles.container1}>
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
              nestedScrollEnabled
            />
          </View>
          <ImageBackground
            style={styles.container2}
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BMWEzNjBlNzAtZmU0Mi00MWYzLWExNjUtY2Y2NjgzMDg2MTVjXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg",
            }}
            resizeMode="cover">
            <Text style={styles.textFeatured}>Featured Movies</Text>
            <FlatList
              style={styles.products}
              contentContainerStyle={styles.prodList}
              data={movieData}
              renderItem={({ item }) => <Product item={item} onSelectProduct={onSelectProduct} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              nestedScrollEnabled
            />
          </ImageBackground>
        </>
      )}
    </ScrollView>
  );
}

export default Categories;
