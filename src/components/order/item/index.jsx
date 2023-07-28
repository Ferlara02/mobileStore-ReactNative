import { TouchableOpacity, Text, View } from "react-native";

import { styles } from "./styles";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};
const OrderItem = ({ id, total, createAt, items }) => {
  return (
    <TouchableOpacity style={styles.orderItem} onPress={() => null}>
      <View style={styles.orderHeaderContainer}>
        <Text style={styles.orderItemDate}>Created at: {formatDate(createAt)}</Text>
      </View>
      <View style={styles.orderBody}>
        <Text style={styles.orderItemId}>Id: {id}</Text>
        <Text style={styles.orderItemTotal}>Total: USD {total}</Text>
        <Text>Total items: {items.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
