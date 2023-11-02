import Container from "@components/Container";
import { useBeerContext } from "../context/BeerContext";
import { FlashList } from "@shopify/flash-list";
import BeerListItem from "../components/BeerListItem";
import { RefreshControl, View } from "react-native";
import { Beer } from "../data/types";
import { NavigationProp } from "@react-navigation/native";
import { BeerStackParamList } from "../BeerRoot";
import HeadingSmall from "@components/text/HeadingSmall";
export default function BeerList({
  navigation,
}: {
  navigation: NavigationProp<BeerStackParamList>;
}) {
  const Beer = useBeerContext();
  const getBeerDetails = (beer: Beer) => {
    navigation.navigate("BeerDetails", { beer });
  };
  return (
    <Container>
      <HeadingSmall style={{ fontSize: 25, textAlign: "center" }}>
        Beer list
      </HeadingSmall>
      <FlashList
        keyboardShouldPersistTaps={"always"}
        refreshControl={
          <RefreshControl
            onRefresh={Beer?.refresh}
            refreshing={Beer?.loading || false}
          />
        }
        data={Beer?.beerList}
        refreshing={Beer?.loading}
        estimatedItemSize={50}
        onEndReachedThreshold={0.5}
        onEndReached={() => !Beer?.loading && Beer?.fetchData()}
        renderItem={({ item }) => (
          <BeerListItem
            onPress={() => getBeerDetails(item)}
            item={item}
            key={item.id}
          />
        )}
      />
    </Container>
  );
}
