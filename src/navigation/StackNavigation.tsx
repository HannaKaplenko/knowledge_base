import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KnowledgeBaseView } from '../modules/mockScreen';
import { useUIContext } from '../UIProvider';


const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    const { t } = useUIContext();
    return (
        <Stack.Navigator initialRouteName='SplashView'>
            <Stack.Screen name="KnowledgeBaseView" component={KnowledgeBaseView} options={{ headerShown: false }} />
            <Stack.Screen name="FolderItemView" component={FolderItemView} />

        </Stack.Navigator>
    );

};
export default StackNavigation;
