import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";

export default function App() {
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Cake",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/images/pasta.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search />
<<<<<<< HEAD
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
=======
      <FlatList
        data={commonCategories}
        renderItem={({ item }) => (
          <CategoryItem name={item.name} imageUrl={item.imageUrl} />
        )}
        horizontal={true}
>>>>>>> 26e22c2 (add flatlist)
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
