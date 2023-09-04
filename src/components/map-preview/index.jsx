import { View, Image } from "react-native";

import { styles } from "./styles";

const MapPreview = ({ children, location, style, image }) => {
  
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapImage} source={{ uri: image }} /> : children}
    </View>
  );
};

export default MapPreview