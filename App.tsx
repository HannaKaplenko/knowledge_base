import React from 'react';
import { View } from 'react-native';
import { UIProvider } from './src/UIProvider';
import { RootNavigation } from './src/navigation/RootNavigation';
import { NetInfoStatus } from './src/UIKit/NetInfoStatus';

const App = () => {
  return (
    <UIProvider>
      <View style={{ flex: 1 }}>
        <RootNavigation />
        <NetInfoStatus />
      </View>
    </UIProvider>
  );
};

export default App;
