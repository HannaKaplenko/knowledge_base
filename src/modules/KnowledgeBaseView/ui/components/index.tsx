import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { IKnowledgeBaseListItem } from '../../../../entities/knowledgeBaseList/IKnowledgeBaseListItem';
import { useState } from 'react';
import { styles } from './styles';
import { useUIContext } from '../../../../UIProvider';
import { Chevron } from '../../../../../assets/icons/Chevron';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/types';
import { SearchIcon } from '../../../../../assets/icons/SearchIcon';
import { SettingsGridIcon } from '../../../../../assets/icons/SettingsGridIcon';

interface Props {
  items: IKnowledgeBaseListItem[];
}

const KnowledgeBaseViewUI = ({ items }: Props) => {
  const [search, setSearch] = useState('');
  const { t } = useUIContext();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const filteredItems = Array.isArray(items)
    ? items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    : [];

  const onFolderPress = (slug: string) => {
    navigation.navigate('FolderListView', { slug });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.sideIcon}>
          <Chevron width={24} height={24} color="#FFFFFF" position="LEFT" />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{t('knowledge_base.title')}</Text>
        </View>
        <View style={styles.sideIcon}>
          <SettingsGridIcon />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          style={styles.searchInput}
          placeholder="Пошук документів"
          placeholderTextColor="#BBB"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        style={styles.folderContainer}
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.folderItem}
            onPress={() => onFolderPress(item.slug)}>
            <Text style={styles.folderText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default KnowledgeBaseViewUI;