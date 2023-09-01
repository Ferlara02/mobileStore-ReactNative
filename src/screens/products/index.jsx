import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { Input, Product } from "../../components";
import categories2 from "../../constants/data/categories2.json";
import { useGetProductsByCategoryQuery } from "../../store/products/apis";
import { COLORS } from "../../themes";
import { useGetCategoriesQuery } from "../../store/categories/apis";

function Products({ navigation, route }) {
  const { categoryId } = route.params;
  const { data: categoriesData } = useGetCategoriesQuery();
  
  const { data, error, isLoading } = useGetProductsByCategoryQuery(categoryId);
  const [search, setSearch] = useState("");
  const [borderColor, setBorderColor] = useState(COLORS.third);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const category3 = categoriesData?.find((cat) => cat.id === categoryId);
  
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };

  const onHandleFocus = () => {
    setBorderColor(COLORS.text);
  };
  const onHandleBlur = () => {
    setBorderColor(COLORS.third);
  };

  const filteredProductsByCategory = data?.filter((prod) => prod.categoryId === categoryId);

  const filterBySearch = (query) => {
    let updateProductList = [...filteredProductsByCategory];

    updateProductList = updateProductList.filter((prod) => {
      return prod.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredProducts(updateProductList);
  };
  const clearSearch = () => {
    setSearch("");
    setFilteredProducts([]);
  };
  const onSelectProduct = ({ productId, name }) => {
    navigation.navigate("ProductDetail", { productId, name });
  };
  
  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.catTitle}>{category3.name}</Text>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          search={search}
          placeholder="Search"
          borderColor={borderColor}
        />
        {search.length > 0 && (
          <Ionicons
            name="close"
            size={40}
            color={COLORS.text}
            onPress={clearSearch}
            style={styles.iconClear}
          />
        )}
      </View>
      <FlatList
        style={styles.products}
        contentContainerStyle={styles.prodList}
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => <Product item={item} onSelectProduct={onSelectProduct} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text>Product not found</Text>
        </View>
      )}
    </View>
  );
}
export default Products;
