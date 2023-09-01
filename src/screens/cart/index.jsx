import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { CartItem } from "../../components";
import {
  increaseItemQty,
  decreaseItemQty,
  removeItemFromCart,
  clearCart,
} from "../../store/cart/cartSlices";
import { useCreateOrderMutation } from "../../store/orders/apis";
import { useGetProfileQuery } from "../../store/settings/api";

const Cart = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.user.localId);
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const [createOrder, { data, isError, error, isLoading }] = useCreateOrderMutation();
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
  
  const onCreateOrder = async () => {
    const newOrder = {
      id: Math.floor(Math.random() * 1000),
      items: cart,
      total,
      user: {
        id: localId,
        name: "John Doe",
        address: userData?.address ? userData.address : "123 street",
        phone: 21321312312,
        email: "fsdfds@fddfdsfsd.com",
      },
      payment: {
        method: "VISA",
      },
      delivery: {
        method: "UPS",
        trackingNumber: Math.floor(Math.random() * 1000),
      },
      createAt: Date.now(),
      finishedAt: "",
    };
    try {
      await createOrder(newOrder);
      navigation.navigate("ordersTab");
      dispatch(clearCart());
    } catch (error) {
      console.warn({ error });
    }
  };

  if (cart.length === 0) {
    return (
      <View style={styles.containerEmpty}>
        <Text style={styles.checkoutButtonText}>Your cart is empty</Text>
      </View>
    );
  }



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
        <TouchableOpacity onPress={() => onCreateOrder()} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <View style={styles.checkoutTotalContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.priceText}>USD: {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
