import { Alert, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
    text: string;
    variant?: "default" | "danger";
    onPress?: () => void;
    size?: "sm" | "md" | "lg";
}

export const Button = ({ text, variant, onPress, size }: ButtonProps) => {
    let backgroundColor = "gray";
    if (variant === "danger") {
        backgroundColor = "red";
    }

    return (<TouchableOpacity 
        onPress={() => Alert.alert("Boton presionado", text)}
        style={{
        backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 3,
        
    }}
    >
        <Text 
        style = {{
            color: "white",
            fontSize: 20,

        }}> {text} </Text>
    </TouchableOpacity>
    );
};


