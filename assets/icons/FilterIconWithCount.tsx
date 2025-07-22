import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Line } from 'react-native-svg';

interface FilterIconWithCountProps {
    count?: number;
}

export const FilterIconWithCount: React.FC<FilterIconWithCountProps> = ({ count = 0 }) => (
    <View style={styles.container}>
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Line x1="3" y1="6" x2="21" y2="6" stroke="#FFFFFF" strokeWidth="2" />
            <Line x1="3" y1="12" x2="21" y2="12" stroke="#FFFFFF" strokeWidth="2" />
            <Line x1="3" y1="18" x2="21" y2="18" stroke="#FFFFFF" strokeWidth="2" />
            <Rect x="10" y="4" width="2" height="4" fill="#FFFFFF" rx="0.5" />
            <Rect x="15" y="10" width="2" height="4" fill="#FFFFFF" rx="0.5" />
            <Rect x="7" y="16" width="2" height="4" fill="#FFFFFF" rx="0.5" />
        </Svg>
        <Text style={styles.count}>{count}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    count: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 6,
        fontSize: 14,
    },
});
