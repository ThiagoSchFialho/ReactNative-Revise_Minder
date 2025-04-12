import { StyleSheet } from "react-native";
import { theme } from "@/app/constants/theme";

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
    marginVertical: 40
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    color: theme.text,
    fontSize: 24,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20
  },
  text: {
    fontFamily: "Montserrat-SemiBold",
    color: theme.secondText,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 80
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
  error: {
    color: '#FF0000',
  },
  button: {
    backgroundColor: theme.mainColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 80,
    marginBottom: 50
  },
  buttonText: {
    textAlign: "center",
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24
  }
})