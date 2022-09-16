import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderColor: "#0D0D0D",
    borderWidth: 1,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
});
