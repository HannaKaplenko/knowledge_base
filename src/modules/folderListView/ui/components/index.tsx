import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';

interface FolderItem {
  id: number;
  name: string;
}

interface Props {
  slug: string;
  items: FolderItem[];
  loading: boolean;
  error?: string;
}

const FolderListViewUI: React.FC<Props> = ({ slug, items, loading, error }) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Помилка: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Папка: {slug}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 8 }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FolderListViewUI;
