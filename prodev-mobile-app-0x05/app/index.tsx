import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/_tabstyle";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>
      <Link href="/join" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/signin" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
