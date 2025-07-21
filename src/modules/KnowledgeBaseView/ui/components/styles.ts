import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191F35',
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  searchInput: {
    backgroundColor: '#2A3050',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  folderContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  folderItem: {
    backgroundColor: '#2A3050',
    width: '48%',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  folderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
