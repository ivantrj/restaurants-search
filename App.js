import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <CategoryItem
        name="Burger"
        imageUrl={require("./src/assets/images/burger.png")}
      />
      <CategoryItem
        name="Pizza"
        imageUrl={require("./src/assets/images/pizza.png")}
      />
      <CategoryItem
        name="Dessert"
        imageUrl={require("./src/assets/images/cake.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "center",
  },
});
