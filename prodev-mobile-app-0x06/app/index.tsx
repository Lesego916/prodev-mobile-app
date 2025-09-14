import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <Text className="text-2xl font-bold mb-5">🏠 Home</Text>
      <Link href="/join" asChild>
        <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-lg mb-3">
          <Text className="text-white font-semibold text-lg">Join</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/signin" asChild>
        <TouchableOpacity className="bg-green-600 px-6 py-3 rounded-lg">
          <Text className="text-white font-semibold text-lg">Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
