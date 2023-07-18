import { NavigationContainer } from "@react-navigation/native";

import ShopNavigation from "./shop";

function RootNavigation() {
  return (
    <NavigationContainer>
      <ShopNavigation />
    </NavigationContainer>
  );
}

export default RootNavigation;
