import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { OrderItem } from "../../components";
import { useGetOrdersQuery } from "../../store/orders/apis";

const Orders = () => {
  const localId = useSelector((state) => state.auth.user.localId);
  const { data, error, isLoading } = useGetOrdersQuery();
  console.log(data);
  const filteredArray = data?.filter(item => item.user.id === localId); //filtro las ordenes, así el usuario solo visualiza las realizadas por él.
  const renderItem = ({ item }) => <OrderItem {...item} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      {filteredArray ? (
        <FlatList data={filteredArray} renderItem={renderItem} keyExtractor={keyExtractor} contentContainerStyle={styles.list}/>
      ) : (
        <Text style={styles.text}>No orders.</Text>
      )}
    </View>
  );
};

export default Orders;
