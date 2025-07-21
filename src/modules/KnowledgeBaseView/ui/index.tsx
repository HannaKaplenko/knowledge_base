import React from 'react';
import { View } from 'react-native';
import { useUIContext } from '../../../UIProvider';
import { NetInfoStatus } from '../../../UIKit/NetInfoStatus'; 
import { useKnowledgeBase } from '../presenters/useKnowledgeBase';
import { styles } from './styles';
import KnowledgeBaseViewUI from './components';

const KnowledgeBaseView: React.FC = () => {
  const { items } = useKnowledgeBase();
  const { t } = useUIContext();

  return (
    <View style={styles.container}>
      <NetInfoStatus />
      <KnowledgeBaseViewUI items={items} />
    </View>
  );
};

export default KnowledgeBaseView;
