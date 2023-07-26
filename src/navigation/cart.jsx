import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../themes";
import Cart from "../screens/cart";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        animation: "fade_from_bottom",
      }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
