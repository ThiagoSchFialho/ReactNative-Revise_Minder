import { StyleSheet } from "react-native";
import { theme } from '@/app/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 30
  },
  title: {
    color: theme.text,
    marginTop: 30,
    marginBottom: 40,
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    textAlign: 'center'
  }
})