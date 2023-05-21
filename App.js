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
      <CategoryItem />
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
