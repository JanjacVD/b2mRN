import Container from "@components/Container";
import HeadingSmall from "@components/text/HeadingSmall";
import Paragraph from "@components/text/Paragraph";
import { LIGHT_BLUE } from "@data/Colors";
import { Animated, Linking, ScrollView, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function Details() {
    const handleOpen = ()=> {
        Linking.openURL('https://github.com/JanjacVD/b2mRN');
    }
  const renderLeftView = () => (
    <View
      style={{
        width: "40%",
        borderRadius: 12,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
      }}
    ><Text>{':)'}</Text></View>
  );
  return (
    <Container style={{ flexDirection: "column", alignItems: "center" }}>
      <HeadingSmall>Made for: b2match</HeadingSmall>
      <ScrollView keyboardShouldPersistTaps={"always"}>
        <Paragraph>Technology: React native</Paragraph>
        <Paragraph>Http client: Axios</Paragraph>
        <Paragraph>Api used: https://punkapi.com/documentation/v2</Paragraph>
        <Paragraph>Made by: Valentino Janjac</Paragraph>
        <Paragraph>Made in: 2 hours 40ish minutes</Paragraph>
        <Paragraph>Things that could be improved:</Paragraph>
        <Paragraph>
          - Add search{" (using loadsh to fetch items by name)"}
        </Paragraph>
        <Paragraph>
          - Use graphQl{" (did not have time to read docs)"}
        </Paragraph>
        <Paragraph>
          - Use some lib to store and cache data, I just like react context
        </Paragraph>
        <Swipeable
          overshootFriction={8}
          enabled
          containerStyle={{ overflow: "hidden" }}
          onSwipeableWillOpen={(e) => e === "left" && handleOpen()}
          renderLeftActions={renderLeftView}
        >
          <Animated.View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: LIGHT_BLUE,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Swipe to open github {'->'}</Text>
          </Animated.View>
        </Swipeable>
      </ScrollView>
    </Container>
  );
}
