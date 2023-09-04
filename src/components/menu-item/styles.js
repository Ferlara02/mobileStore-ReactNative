import { StyleSheet } from 'react-native';

import { COLORS} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: 140,
    marginTop: 15,
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderColor: COLORS.third
  },
  content: {
    width: 140,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: COLORS.text,
    textAlign: "center"
  },
});