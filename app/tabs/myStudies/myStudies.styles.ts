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
  studyContainer: {
    backgroundColor: theme.secondBackground,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    elevation: 5
  },
  topStudyContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  studyTopic: {
    width: "85%",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: theme.text,
    marginBottom: 25
  },
  studyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  studyInfoText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: theme.secondText
  },
  menuBox: {
    position: 'absolute',
    top: 38,
    right: -10,
    backgroundColor: theme.contrastBackground,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: theme.border,
    borderWidth: 1,
    elevation: 10,
    zIndex: 9999,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15
  },
  menuItem: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    color: theme.text,
    paddingVertical: 7,
  }  
})