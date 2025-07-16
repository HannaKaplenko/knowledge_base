import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { IKnowledgeBaseListItem } from '../../../entities/knowledgeBaseList/IKnowledgeBaseListItem';
import { styles } from './styles';
import { useUIContext } from '../../../UIProvider';
import { NetInfoStatus } from '../../../UIKit/NetInfoStatus';
import { useKnowledgeBase } from '../presenters/useKnowledgeBase';
import KnowledgeBaseViewUI from './components';

type Props = {
  items: IKnowledgeBaseListItem[];
};

const KnowledgeBaseView: React.FC<Props> = () => {
  const { items } = useKnowledgeBase();
  const { t } = useUIContext();

  return (
    <View style={styles.container}>
      <NetInfoStatus />
      <Text style={styles.title}>{t('knowledge_base.title')}</Text>
      <KnowledgeBaseViewUI items={items} />;
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default KnowledgeBaseView;
