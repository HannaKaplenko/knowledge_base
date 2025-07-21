import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { IKnowledgeBaseListItem } from '../../../../entities/knowledgeBaseList/IKnowledgeBaseListItem';
import { useState } from 'react';
import { styles } from './styles';
import { useUIContext } from '../../../../UIProvider';
import { useNavigation } from '@react-navigation/native';


interface Props {
  items: IKnowledgeBaseListItem[];
}

const KnowledgeBaseViewUI = ({ items }: Props) => {
  const [search, setSearch] = useState('');
  const { t } = useUIContext();
  const navigation = useNavigation();

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
      <Text style={styles.title}>{t('knowledge_base.title')}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Пошук документів"
        placeholderTextColor="#BBB"
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.folderContainer}>
        {filteredItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.folderItem}
            onPress={() => onFolderPress(item.slug)}
          >
            <Text style={styles.folderText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default KnowledgeBaseViewUI;