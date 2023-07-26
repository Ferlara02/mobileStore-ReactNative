import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CartItem = ({
  id,
  categoryId,
  name,
  price,
  image,
  currency,
  quantity,
  stock,
  onIncreaseCartQty,
  onDecreaseCartQty,
  onRemoveItemFromCart
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>
          {currency.code} {price}
        </Text>
        <Text style={styles.qty}>Cantidad: {quantity}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.increaseButton} onPress={() => onIncreaseCartQty(id)}>
            <Text style={styles.increaseText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decreaseButton} onPress={() => onDecreaseCartQty(id)}>
            <Text style={styles.decreaseText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemoveItemFromCart(id)}>
            <Ionicons name="trash" size={22} color={COLORS.text} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
