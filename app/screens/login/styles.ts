import { StyleSheet, Dimensions } from "react-native";
import { theme } from '../../constants/theme'

const screenWidth = Dimensions.get("window").width;

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
    marginVertical: 130
  },
  formContainer: {
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
    width: "90%",
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    color: theme.text,
  },
  button: {
    backgroundColor: theme.mainColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 90,
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