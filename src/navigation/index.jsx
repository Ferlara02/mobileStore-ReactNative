import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";
function RootNavigation() {
  const auth = useSelector((state) => state.auth.user)

  return (
    <NavigationContainer>
      {auth?.localId ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigation;
