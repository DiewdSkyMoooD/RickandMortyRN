import { StyleSheet, Text, View } from "react-native";
import ListPersons from "./src/components/ListPersons";

export default function App() {
  return (
    <View style={styles.container}>
      <ListPersons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
