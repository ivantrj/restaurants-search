import { View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Search() {
  return (
    <View>
      <FontAwesome name="search" />
      <TextInput placeholder="restaurants, food" />
    </View>
  );
}
