import React from 'react';
import { View, Text } from 'react-native';
import { IKnowledgeBaseListItem } from '../../../../entities/knowledgeBaseList/IKnowledgeBaseListItem';

interface Props {
  items: IKnowledgeBaseListItem[];
}

const KnowledgeBaseViewUI = ({ items }: Props) => {
  return (
    <View>
      {items.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default KnowledgeBaseViewUI;
