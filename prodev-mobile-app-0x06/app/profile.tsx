import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <Text className="text-2xl font-bold mb-2">👤 Profile</Text>
      <Text className="text-gray-600">User profile details will appear here.</Text>
    </View>
  );
}
