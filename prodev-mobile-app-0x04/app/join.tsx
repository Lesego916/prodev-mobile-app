import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/_join";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Link href="/signin" asChild>
        <TouchableOpacity>
          <Text style={styles.link}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
