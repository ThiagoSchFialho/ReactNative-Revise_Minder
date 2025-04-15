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
  label: {
    color: theme.text,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginBottom: 2,
    marginTop: 20 
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
    marginBottom: 2
  },
  input: {
    height: 50,
    width: "100%",
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    color: theme.text,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: theme.text,
    marginTop: 60,
    marginBottom: 30
  },
  deleteAccountContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: theme.secondBackground,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  deleteText1: {
    fontFamily: "Montserrat-Regular",
    fontSize: 20,
    textAlign: 'center',
    color: theme.text,
    marginBottom: 20
  },
  deleteText2: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    textAlign: 'center',
    color: theme.text,
    marginBottom: 50
  },
  deleteButton: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#FF8080',
    borderWidth: 1,
    borderColor: '#A30000',
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  deleteButtonText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    textAlign: 'center',
    color: '#A30000'
  }
})