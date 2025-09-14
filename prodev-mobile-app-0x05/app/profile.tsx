import { View, Text } from "react-native";
import styles from "../styles/_tabstyle";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>
      <Text>User profile details will appear here.</Text>
    </View>
  );
}
