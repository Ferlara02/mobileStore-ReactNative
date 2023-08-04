import { StyleSheet } from 'react-native';

import { COLORS} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: 320,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
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
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: COLORS.text,
    textAlign: "center"
  },
});