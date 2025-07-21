import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUIContext } from '../UIProvider';
import { SplashView } from '../modules/splashView/ui';
import KnowledgeBaseView from '../modules/KnowledgeBaseView/ui';
import FolderListView from '../modules/folderListView';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    const { t } = useUIContext();
    return (
        <Stack.Navigator initialRouteName='SplashView'>
              <Stack.Screen name="SplashView" component={SplashView} options={{ headerShown: false }} />
            <Stack.Screen name="KnowledgeBaseView" component={KnowledgeBaseView}/>
            <Stack.Screen name="FolderListView" component={FolderListView} />

        </Stack.Navigator>
    );

};
export default StackNavigation;
