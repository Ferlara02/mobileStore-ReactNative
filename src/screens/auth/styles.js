import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  header: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.text,
    paddingVertical: 10,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: COLORS.text,
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: "Poppins-Regular",
    marginBottom: 5,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  link: {},
  linkText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.text,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.background,
  },
});
