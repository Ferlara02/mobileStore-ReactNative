import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../screens/categories/index.jsx";
import ProductDetail from "../screens/productDetails/index.jsx";
import Products from "../screens/products/index.jsx";
import { COLORS } from "../themes/index.js";

const Stack = createNativeStackNavigator();

function ShopNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        animation: "fade_from_bottom",
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigation;
