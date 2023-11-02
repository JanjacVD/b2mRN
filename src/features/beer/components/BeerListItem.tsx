import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Beer } from "../data/types";
import HeadingSmall from "@components/text/HeadingSmall";
import { ComponentStyles } from "@styles/ComponentStyles";

export default function BeerListItem({item, ...props}:{item:Beer} & TouchableOpacityProps){
    return (
        <TouchableOpacity {...props} style={ComponentStyles.listItem} key={item.id}>
            <HeadingSmall style={{fontSize:16}}>{item.name}</HeadingSmall>
            <HeadingSmall style={{fontSize:10}}>ABV: {item.abv}</HeadingSmall>
        </TouchableOpacity>
    )
}