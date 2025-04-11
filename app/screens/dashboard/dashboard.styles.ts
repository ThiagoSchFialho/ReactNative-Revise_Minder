import { StyleSheet } from "react-native";
import { theme } from "@/app/constants/theme";


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
  reviewContainerTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.todoBackground,
    borderColor: theme.todoBorder,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 4
  },
  reviewContainerDone: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.doneBackground,
    borderColor: theme.doneBorder,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5
  },
  reviewTopic: {
    width: "85%",
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20
  },
  reviewStatusTodo: {
    backgroundColor: theme.todoBorder,
    width: 30,
    height: 30,
    borderRadius: 40,
    elevation: 3
  },
  reviewStatusDone: {
    backgroundColor: theme.doneBorder,
    width: 30,
    height: 30,
    borderRadius: 40,
    elevation: 2
  },
  futureReviewsTitle: {
    color: theme.text,
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    marginTop: 80
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: theme.text,
    marginBottom: 30
  },
  reviewContainer: {
    backgroundColor: theme.secondBackground,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    elevation: 5
  },
  futureReviewTopic: {
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
  reviewStatus: {
    backgroundColor: '#80D1FF',
    borderColor: '#0069A3',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  reviewStatusText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    color: '#0069A3'
  },
  reviewDate: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: theme.text
  }
})