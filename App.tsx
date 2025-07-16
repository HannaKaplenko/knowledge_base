import React from 'react';
import { SafeAreaView } from 'react-native';
import { UIProvider } from './src/UIProvider';
import KnowledgeBaseView from './src/modules/KnowledgeBaseView/ui';

const App = () => {
  return (
    <UIProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KnowledgeBaseView items={[]} />
      </SafeAreaView>
    </UIProvider>
  );
};

export default App;
