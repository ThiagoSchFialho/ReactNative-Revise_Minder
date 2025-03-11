import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.HomeBackground,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.text,
  }
});
