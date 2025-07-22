import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput } from 'react-native';
import { styles } from './styles';
import { SearchIcon } from '../../../../../assets/icons/SearchIcon';
import { FilterIconWithCount } from '../../../../../assets/icons/FilterIconWithCount';

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
    const [search, setSearch] = useState('');
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

    const filteredItems = Array.isArray(items)
        ? items.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        : [];

return (
  <View style={styles.container}>
    <Text style={styles.folderText}>Папка: {slug}</Text>
    <View style={styles.searchFilterContainer}>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          style={styles.searchInput}
          placeholder="Пошук по назві"
          placeholderTextColor="#BBB"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FilterIconWithCount />
    </View>
    <FlatList
      data={filteredItems}
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
