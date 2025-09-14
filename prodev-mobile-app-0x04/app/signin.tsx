import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/_join";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Link href="/join" asChild>
        <TouchableOpacity>
          <Text style={styles.link}>Don’t have an account? Join</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
