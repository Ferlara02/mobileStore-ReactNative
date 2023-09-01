import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, StyleSheet } from "react-native";
import SettingsNavigator from "./settings.jsx";
import Categories from "../screens/categories/index.jsx";
import ProductDetail from "../screens/productDetails/index.jsx";
import Products from "../screens/products/index.jsx";
import { COLORS } from "../themes/index.js";

const Stack = createNativeStackNavigator();

function ShopNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Movies"
      screenOptions={({ navigation }) => ({
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        animation: "fade_from_bottom",
        headerRight: () => (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate("SettingsStack")}>
            <Ionicons name="settings-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Movies" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsNavigator}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  goBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
});

export default ShopNavigation;
