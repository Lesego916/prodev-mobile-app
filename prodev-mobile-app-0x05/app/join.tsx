import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../styles/_join";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Us</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Register" onPress={() => alert("Registered!")} />
    </View>
  );
}
