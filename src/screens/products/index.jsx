import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { Input, Product } from "../../components";
import categories2 from "../../constants/data/categories2.json";
import PRODUCTS2 from "../../constants/data/products.json";
import { COLORS } from "../../themes";

function Products({ onHandleGoBack, categoryId }) {
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

  const filteredProductsByCategory = PRODUCTS2.filter((prod) => prod.categoryId === categoryId);
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
  return (
    <View style={styles.container}>
      <Text style={styles.catTitle}>{category3.name}</Text>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
          <Ionicons name="arrow-back" size={40} color={COLORS.text} />
        </TouchableOpacity>
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
        renderItem={({ item }) => <Product item={item} />}
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
