import { Ionicons } from "@expo/vector-icons";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import ShopNavigation from "./shop";
import { COLORS } from "../themes";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  const cartLength = useSelector((state) => state.cart.items).length
  return (
    <Tab.Navigator
      initialRouteName="shopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Poppins-Bold",
          fontSize: 10,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <Tab.Screen
        name="shopTab"
        component={ShopNavigation}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="cartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />
          ),
          tabBarBadge: cartLength,
          tabBarBadgeStyle: {
            backgroundColor: "black",
            color: "white",
            fontFamily: "Poppins-Regular",
            fontSize: 11,
          }
        }}
      />
      <Tab.Screen
        name="ordersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "file-tray" : "file-tray-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
