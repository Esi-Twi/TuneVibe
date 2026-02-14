import { TextProps, TextStyle, ViewStyle } from "react-native";


export type TypeProps = {
    size?: number;
    color?: string;
    fontFamily?: string;
    fontWeight?: TextStyle['fontWeight'];
    children: any | null;
    style?: TextStyle;
    textProps?: TextProps;
}

export type ButtonProps = {
    style?: ViewStyle;
    onPress?: () => void;
    loading?: boolean;
    children: React.ReactNode;
}



