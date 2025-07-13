import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

import "./global.css";
import WelcomScreen from "@/screens/WelcomScreen";
import { SafeAreaView } from "react-native-safe-area-context";
export default function index() {


return (
<View className="">
    <Text>index</Text>
   
    <Button icon="account-arrow-down" mode="contained" onPress={()=> console.log('Pressed')}>
        Press me
    </Button>



</View>
);
}
