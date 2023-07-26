import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CartItem } from "../../components";
import { increaseItemQty, decreaseItemQty, removeItemFromCart } from "../../store/cart/cartSlices";

const Cart = () => {
  const dispatch = useDispatch();
  const onIncreaseCartQty = (id) => {
    dispatch(increaseItemQty({ id }));
  };
  const onDecreaseCartQty = (id) => {
    dispatch(decreaseItemQty({ id }));
  };
  const onRemoveItemFromCart = (id) => {
    dispatch(removeItemFromCart({ id }));
  };
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItem
            {...item}
            onIncreaseCartQty={onIncreaseCartQty}
            onDecreaseCartQty={onDecreaseCartQty}
            onRemoveItemFromCart={onRemoveItemFromCart}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
        contentContainerStyle={styles.itemStyle}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => null} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <View style={styles.checkoutTotalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.priceText}>USD {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
