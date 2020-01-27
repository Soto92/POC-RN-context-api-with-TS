import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    height: height
  },
  content: {
    height: height - 74,
    alignItems: "center"
  },
  inputsBox: {
    width: width - 50,
    height: 350,
    justifyContent: "space-around"
  },
  label: {
    color: "grey"
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    height: 40
  },
  footerNavigator: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: "#007ACC",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 10,
    margin: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 50
  }
});

export default style;
