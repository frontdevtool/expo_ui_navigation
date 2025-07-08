import { View, Text } from "react-native";

import "./global.css";
import WelcomScreen from "@/screens/WelcomScreen";
export default function index() {
  return (
    <View className="flex-1 justify-center items-center">
     <WelcomScreen/>
    </View>
  );
}
