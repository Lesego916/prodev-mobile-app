import { View, Text } from "react-native";
import styles from "../styles/_tabstyle";

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Explore</Text>
      <Text>Discover new content here!</Text>
    </View>
  );
}
