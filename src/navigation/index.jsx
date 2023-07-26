import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabs";

function RootNavigation() {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

export default RootNavigation;
