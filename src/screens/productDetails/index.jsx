import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import PRODUCTS2 from "../../constants/data/products.json";

function ProductDetail({ navigation, route }) {
  const { productId, name } = route.params;
  const product = PRODUCTS2.find((prod) => prod.id === productId);
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={{ uri: product.image }} style={styles.prodImage} />
        <View style={styles.containerTitle}>
          <Text style={styles.prodTitle}>{product.name}</Text>
          <Text style={styles.prodPrice}>
            {product.currency.symbol} {product.price}
          </Text>
        </View>
      </View>
      <View style={styles.container3}>
        <Text style={styles.prodDescription}>{product.description}</Text>
        <Text style={styles.features}>Features: </Text>
        {product.features.map((feat) => (
          <Text style={styles.feature} key={product.features[feat]}>
            {feat}  ✓
          </Text>
        ))}
      </View>
    </View>
  );
}

export default ProductDetail;
