import { useNetInfo } from "@react-native-community/netinfo";

export const useNetInfoStatus = (): boolean => {
    const { isConnected } = useNetInfo();
    return isConnected ?? true;
};