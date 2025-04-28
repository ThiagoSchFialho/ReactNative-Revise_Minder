import { StyleSheet } from "react-native";
import { theme } from "@/app/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal:30
  },
  title: {
    color: theme.text,
    marginTop: 30,
    marginBottom: 40,
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.secondBackground,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  label: {
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginBottom: 2,
    marginTop: 23
  },
  input: {
    height: 50,
    width: "100%",
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    color: theme.text,
  },
  error: {
    color: '#ff0000'
  },
  button: {
    backgroundColor: theme.mainColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 100,
    marginBottom: 80
  },
  buttonText: {
    textAlign: "center",
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24
  }
})