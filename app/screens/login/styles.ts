import { StyleSheet } from "react-native";
import { theme } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal:30
  },
  logo: {
    width: 301,
    height: 82,
    marginHorizontal: "auto",
    marginVertical: 90
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.secondBackground,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15
  },
  input: {
    height: 50,
    width: "100%",
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    color: theme.text,
  },
  button: {
    backgroundColor: theme.mainColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 100,
    marginBottom: 50
  },
  buttonText: {
    textAlign: "center",
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24
  },
  forgotPassword: {
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "underline",
  }
})