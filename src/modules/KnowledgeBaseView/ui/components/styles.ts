import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#000",
        padding: 6,
        borderRadius: 12,
        marginHorizontal: 16,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: 100,
        height: 100,
    },
    wishIconWrapper: {
        flexDirection: "row",
        top: 6,
        right: 6,
        padding: 4,
        borderRadius: 16,
        zIndex: 1,
    },
    content: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 8,
        gap: 6,
    },
    iconPosition: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 4,
    },
    title: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '700',
        margin: 8,
    },
    description: {
        lineHeight: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '700',
    },
    buttonBuy: {
        height: 28,
        paddingHorizontal: 24,
    }
})