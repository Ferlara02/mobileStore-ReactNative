import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../themes";
const Product = ({ item }) => {
  return (
    <View style={styles.productContainer}>
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
          <Ionicons name="star" size={20} color="orange"/>
        </View>
      </View>
    </View>
  );
};

export default Product;
