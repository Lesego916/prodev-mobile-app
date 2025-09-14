import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/_mainstyle";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to ProDev App</Text>

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
