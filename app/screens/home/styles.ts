import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: "#171823",
  },
  logo: {
    width: 250,
    height: 55,
    marginHorizontal: "auto",
    marginBottom: 45
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 29,
    textAlign: "center",
    color: theme.text,
    marginBottom: 30,
  },
  benefitsContainer: {
    marginBottom: 10,
  },
  benefitContainer: {
    width: screenWidth - 60,
    height: 250,
    justifyContent: "center"
  },
  backgroundImg: {
    position: "absolute",
    width: 250,
    height: 250,
    alignSelf: "center"
  },
  benefitTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    color: theme.mainColor,
    marginBottom: 10
  },
  benefitText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 19,
    color: theme.text,
    marginBottom: 10
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 90
  },
  startButton: {
    backgroundColor: theme.mainColor,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 40
  },
  startButtonText: {
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: theme.text,
  },
  haveAnAccount: {
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: theme.text,
    marginBottom: 50
  },
  anchor: {
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: theme.mainColor,
    textDecorationLine: "underline"
  }
});