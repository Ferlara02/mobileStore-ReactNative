import { StyleSheet } from 'react-native';

import { COLORS} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: 320,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.third
  },
  content: {
    width: 320,
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