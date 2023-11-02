import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BLUE, GREY, LIGHT_BLUE } from "@data/Colors";
import BeerRoot, { BeerStackParamList } from "@features/beer/BeerRoot";
import Details from "@features/details/Details";
export default function RootNavigator() {
  const RootNavigator = createBottomTabNavigator<TabParamList>();
  return (
    <RootNavigator.Navigator
      initialRouteName="Beer"
      sceneContainerStyle={{
        backgroundColor: GREY,
      }}
      screenOptions={{
        tabBarActiveTintColor: BLUE,
        tabBarInactiveTintColor: LIGHT_BLUE,
        tabBarStyle: {
          backgroundColor: GREY,
          borderTopColor: "#eee",
          borderTopWidth: 1,
        },
        lazy: true,
        headerShown: false,
      }}
    >
      <RootNavigator.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="beer"
              color={focused ? BLUE : LIGHT_BLUE}
              size={30}
            />
          ),
        }}
        name="Beer"
        children={() => <BeerRoot />}
      />
      <RootNavigator.Screen
        name="Details"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="information"
              color={focused ? BLUE : LIGHT_BLUE}
              size={30}
            />
          ),
        }}
        component={Details}
      />
    </RootNavigator.Navigator>
  );
}
export type TabParamList = {
  Beer: BeerStackParamList;
  Details: undefined;
};
