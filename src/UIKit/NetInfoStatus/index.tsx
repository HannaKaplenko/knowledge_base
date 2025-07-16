import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import { useUIContext } from "../../UIProvider";
import { styles } from "./styles";
import { useNetInfoStatus } from "../../hooks/useNetInfoStatus";

export const NetInfoStatus: FC = ({ }) => {
    const { t } = useUIContext();
    const isConnected = useNetInfoStatus();

    return (isConnected
        ? null
        : <View style={styles.container} pointerEvents="none">
            <Text style={styles.text}>{t("NetInfoStatus.message")}</Text>
        </View>
    )
}