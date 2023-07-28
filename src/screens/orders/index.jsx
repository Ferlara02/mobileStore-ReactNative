import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { OrderItem } from "../../components";
import { useGetOrdersQuery } from "../../store/orders/apis";

const Orders = () => {
  const { data, error, isLoading } = useGetOrdersQuery();

  const renderItem = ({ item }) => (
    <OrderItem {...item}/>
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
