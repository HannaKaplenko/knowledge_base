import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191F35',
        padding: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    sideIcon: {
        width: 32,
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#191F35',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#191F35',
        color: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        marginLeft: 8,
    },
    folderContainer: {
        marginTop: 8,
    },
    folderItem: {
        flex: 1,
        backgroundColor: '#2A3050',
        padding: 16,
        borderRadius: 10,
        marginBottom: 16,
        marginHorizontal: 8,
    },
    folderText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});