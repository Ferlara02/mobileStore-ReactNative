import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { Input, Product } from "../../components";
import categories2 from "../../constants/data/categories2.json";
import { COLORS } from "../../themes";

function Products({ navigation, route }) {
  const { categoryId } = route.params;

  const products = useSelector((state) => state.products.data);

  const [search, setSearch] = useState("");
  const [borderColor, setBorderColor] = useState(COLORS.third);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const category3 = categories2.find((cat) => cat.id === categoryId);

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

  const filteredProductsByCategory = products.filter((prod) => prod.categoryId === categoryId);
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
