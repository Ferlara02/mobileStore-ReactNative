import { useEffect } from "react";
import { TouchableHighlight, ImageBackground, Text, useWindowDimensions, View } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectedCategory }) => {
  const { width, height } = useWindowDimensions();
  return (
    <TouchableHighlight
      onPress={() => onSelectedCategory(id)}
      style={[width > 650 ? styles.containerTablet : styles.container, { backgroundColor }]}
      underlayColor={COLORS.secondary}>
      <View style={width > 650 && styles.container2}>
        <ImageBackground
          source={{ uri: backgroundImage }}
          style={width > 650 ? styles.imageBackgroundTablet : styles.imageBackground}
          resizeMode={width > 650 ? "center" : "cover"}
        />
        <Text style={width > 650 ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryItem;
