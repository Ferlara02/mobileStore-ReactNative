import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { addToCart } from "../../store/cart/cartSlices";

function ProductDetail({ navigation, route }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const { productId, name } = route.params;

  const product = products.find((prod) => prod.id === productId);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <ScrollView style={styles.container} opt>
      <View style={styles.container2}>
        <Image source={{ uri: product.image }} style={styles.prodImage} />
        <View style={styles.containerTitle}>
          <Text style={styles.prodTitle}>{product.name}</Text>
          <Text style={styles.prodPrice}>
            {product.currency.symbol} {product.price}
          </Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.addCartButton} onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <Text style={styles.prodDescription}>{product.description}</Text>
        <Text style={styles.features}>Features: </Text>
        {product.features.map((feat) => (
          <Text style={styles.feature} key={product.features[feat.indexOf()]}>
            {feat} ✓
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default ProductDetail;
