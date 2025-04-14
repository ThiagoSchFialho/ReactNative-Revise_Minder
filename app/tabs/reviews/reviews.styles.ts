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
  },
  reviewContainer: {
    backgroundColor: theme.secondBackground,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    elevation: 5
  },
  reviewTopic: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: theme.text,
    marginBottom: 25
  },
  reviewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewStatusDone: {
    backgroundColor: '#80FFD1',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  reviewStatusTodo: {
    backgroundColor: '#FF8080',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  reviewStatusTextDone: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: '#006B45'
  },
  reviewStatusTextTodo: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: '#A30000'
  },
  reviewDate: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: theme.text
  }
})