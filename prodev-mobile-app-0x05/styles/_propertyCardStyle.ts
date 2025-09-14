import { StyleSheet } from "react-native";

const propertyCardStyle = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  description: { fontSize: 14, color: "#555" },
});

export default propertyCardStyle;
