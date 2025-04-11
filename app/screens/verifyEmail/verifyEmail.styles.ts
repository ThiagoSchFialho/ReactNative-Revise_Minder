import { StyleSheet, Dimensions } from "react-native";
import { theme } from "@/app/constants/theme";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 30,
  },
  logo: {
    width: 301,
    height: 82,
    marginHorizontal: "auto",
    marginVertical: 40,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    color: theme.text,
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontFamily: "Montserrat-SemiBold",
    color: theme.text,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 80,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth - 60,
    marginBottom: 30,
  },
  input: {
    width: 40,
    borderBottomWidth: 1,
    borderColor: theme.text,
    fontSize: 30,
    fontFamily: "Montserrat-Medium",
    color: theme.text,
    textAlign: "center",
    paddingBottom: 0
  },
  button: {
    backgroundColor: theme.mainColor,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 80,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24,
  },
  resendButton: {
    width: screenWidth * 0.5,
    backgroundColor: theme.secondBackground,
    borderRadius: 5,
    paddingVertical: 12,
    alignSelf: "center",
  },
  resendButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    color: theme.secondText,
  },
});