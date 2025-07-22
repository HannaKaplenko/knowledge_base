import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#191F35',
    },
    folderItem: {
        padding: 16,
        backgroundColor: '#2A3050',
        borderRadius: 10,
        marginBottom: 12,
    },
    folderText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        margin: 8,
    },
    searchFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 36,
        marginBottom: 20,
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
        margin: 8,
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
    filterIconPosition: {

    },
});
