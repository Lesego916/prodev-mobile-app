import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Join() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <Text className="text-2xl font-bold mb-5">Create Account</Text>
      <TextInput className="w-full border border-gray-300 rounded-lg p-3 mb-3" placeholder="Name" />
      <TextInput className="w-full border border-gray-300 rounded-lg p-3 mb-3" placeholder="Email" />
      <TextInput className="w-full border border-gray-300 rounded-lg p-3 mb-3" placeholder="Password" secureTextEntry />
      <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-lg">
        <Text className="text-white font-semibold text-lg">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
