import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    height: height
  },
  content: {
    height: height - 74,
    alignItems: 'center'
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: '#f2eded'
  },
  buttonBox: {
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    color: "grey"
  },
  footerNavigator: {
    height: 50,
    backgroundColor: "#007ACC",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 10,
    backgroundColor: "white",
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 50
  }
});

export default style;
