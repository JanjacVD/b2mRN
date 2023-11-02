import { createStackNavigator } from "@react-navigation/stack";
import BeerList from "./screens/BeerList";
import BeerContextProvider from "./context/BeerContext";
import { Beer } from "./data/types";
import BeerDetails from "./screens/BeerDetails";

export default function BeerRoot() {
  const Stack = createStackNavigator<BeerStackParamList>();
  return (
    <BeerContextProvider>
      <Stack.Navigator initialRouteName="BeerList" screenOptions={{headerShown:false}}>
        <Stack.Screen name="BeerList" component={BeerList} />
        <Stack.Screen name="BeerDetails" component={BeerDetails} />
      </Stack.Navigator>
    </BeerContextProvider>
  );
}
export type BeerStackParamList = {
  BeerList: undefined;
  BeerDetails: {
    beer:Beer
  };
};
