import { GREY, RED } from "@data/Colors";
import { StyleSheet } from "react-native";

export const ComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY,
    height: "auto",
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: RED,
    marginVertical: 5,
    width: "98%",
    marginHorizontal: "1%",
    borderRadius: 12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
});
