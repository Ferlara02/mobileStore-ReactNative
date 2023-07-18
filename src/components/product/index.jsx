import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../themes";
const Product = ({ item, onSelectProduct }) => {
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => onSelectProduct({ productId: item.id, name: item.name })}>
      <Image source={{ uri: item.image }} style={styles.prodImage} />
      <Text style={styles.textProd} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      <View style={styles.prodPriceRating}>
        <Text style={styles.price}>
          {item.currency.symbol} {item.price}
        </Text>
        <View style={styles.rating}>
          <Text>{item.rating}</Text>
          <Ionicons name="star" size={20} color="orange" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
