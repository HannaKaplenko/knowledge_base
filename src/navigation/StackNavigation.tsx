import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KnowledgeBaseView } from '../modules/mockScreen';
import { useUIContext } from '../UIProvider';
import FolderListView from '../modules/folderListView';
import { SplashView } from '../modules/splashView/ui';


const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    const { t } = useUIContext();
    return (
        <Stack.Navigator initialRouteName='SplashView'>
              <Stack.Screen name="SplashView" component={SplashView} options={{ headerShown: false }} />
            <Stack.Screen name="KnowledgeBaseView" component={KnowledgeBaseView} options={{ headerShown: false }} />
            <Stack.Screen name="FolderListView" component={FolderListView} />

        </Stack.Navigator>
    );

};
export default StackNavigation;
