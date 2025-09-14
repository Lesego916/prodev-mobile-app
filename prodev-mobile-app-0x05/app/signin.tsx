import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Login" onPress={() => alert("Signed In!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
});
