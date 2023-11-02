import { Text, TextProps, TextStyle } from "react-native";

export default function HeadingSmall({children,style, ...props}:
     {children:TextProps['children']} & TextProps){
    return <Text style={[{fontSize:20, fontWeight:'700', color:'#fff'}, style]} {...props}>
        {children}
    </Text>
}