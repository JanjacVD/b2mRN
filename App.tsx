import Container from "@components/Container";
import RootNavigator from "@navigators/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <Container>
          <StatusBar style="dark" />
          <RootNavigator />
        </Container>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
