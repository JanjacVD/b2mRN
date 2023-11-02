import { Text, TextProps } from "react-native";

export default function Paragraph({
  children,
  ...props
}: {
  children: TextProps['children'];
} & TextProps) {
  return (
    <Text
      style={{
        fontSize: 16,
        color: "#fff",
        marginTop: 20,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
