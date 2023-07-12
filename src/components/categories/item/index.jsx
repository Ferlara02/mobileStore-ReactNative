import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes';
import { useEffect } from 'react';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectedCategory }) => {
  const {width, height} = useWindowDimensions()
  return (
    <TouchableHighlight
      onPress={() => onSelectedCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.secondary}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={width > 650 ? styles.imageBackgroundTablet : styles.imageBackground}
        resizeMode={width > 650 ? "contain" : "cover"}>
        <Text style={width > 650 ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;
