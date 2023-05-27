import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";
import { useState } from "react";

export default function Search({ setTerm }) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={styles.input}
        placeholder="restaurants, food"
        value={input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginTop: 5,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
