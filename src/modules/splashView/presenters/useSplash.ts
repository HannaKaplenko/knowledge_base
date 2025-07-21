import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";

export const useSplash = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('KnowledgeBaseView');
        }, 2000);
        
        return () => clearTimeout(timer);
    }, [navigation]);
};