import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Orders from "../screens/orders";
import { COLORS } from "../themes";
const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        animation: "fade_from_bottom",
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
