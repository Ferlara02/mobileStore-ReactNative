import { View, Text } from "react-native";

import { styles } from "./styles.js";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default Header