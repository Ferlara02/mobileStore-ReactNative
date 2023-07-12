import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

const Input = ({
  borderColor,
  onHandleFocus,
  onHandleBlur,
  onHandleChangeText,
  search,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, { borderColor }]}
        onFocus={onHandleFocus}
        onChangeText={onHandleChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        cursorColor={borderColor}
        placeholderTextColor={borderColor}
        value={search}
        onBlur={onHandleBlur}
      />
    </View>
  );
};

export default Input