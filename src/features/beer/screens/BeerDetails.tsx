import { RouteProp } from "@react-navigation/native";
import { BeerStackParamList } from "../BeerRoot";
import Container from "@components/Container";
import { Image, ScrollView, View } from "react-native";
import HeadingSmall from "@components/text/HeadingSmall";
import Paragraph from "@components/text/Paragraph";
import Br from "@components/text/Br";

export default function BeerDetails({
  route,
}: {
  route: RouteProp<BeerStackParamList, "BeerDetails">;
}) {
  const beer = route.params.beer;
  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingHorizontal: "5%" }}>
        <HeadingSmall
          style={{ textAlign: "center", fontSize: 30, letterSpacing: 2 }}
        >
          {beer?.name}
        </HeadingSmall>
        <Image
          source={{ uri: beer?.image_url }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            marginVertical: 20,
          }}
        />
        <Paragraph>
          {beer.description}
          ABV:{beer.abv}
        </Paragraph>
        <Paragraph>Brewers tips: {beer.brewers_tips}</Paragraph>
        <Paragraph>
          Food pairing:{" "}
          {beer.food_pairing.map((x, i) =>
            i === beer.food_pairing.length - 1 ? x : x + ", "
          )}
        </Paragraph>
        <Paragraph>
          Boil volume: {beer.boil_volume.value} {beer.boil_volume.unit}
        </Paragraph>
        <Paragraph>Ibu: {beer.ibu}</Paragraph>
        <Paragraph>Ingredients:</Paragraph>
        <Paragraph>
          Hops:{" "}
          {beer.ingredients.hops.map(
            (x) =>
              "\n  -   " +
              x.name +
              "\n    " +
              "       When to add: " +
              x.add +
              "\n    " +
              "       How much to add: " +
              x.amount.value +
              " " +
              x.amount.unit +
              "\n    " +
              "       When to add: " +
              x.attribute
          )}
        </Paragraph>
        <Paragraph>
          Malts:{" "}
          {beer.ingredients.malt.map(
            (x) =>
              "\n  -   " +
              x.name +
              "\n    " +
              "       How much to add: " +
              x.amount.value +
              " " +
              x.amount.unit
          )}
        </Paragraph>
        <Paragraph>
            Yeast: {beer.ingredients.yeast}
        </Paragraph>
        <Paragraph>
           Contributed by: {beer.contributed_by}
        </Paragraph>
      </ScrollView>
    </Container>
  );
}
