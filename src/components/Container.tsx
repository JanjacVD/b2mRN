import { SafeAreaView, View, ViewProps, ViewStyle } from "react-native";
import { ComponentStyles } from "@styles/ComponentStyles";
export default function Container({children, style, ...props}: {children:React.ReactNode, style?: ViewStyle} & ViewProps){
    return (
        <SafeAreaView style={[ComponentStyles.container, style]} {...props} >
            {children}
        </SafeAreaView>
    )
}