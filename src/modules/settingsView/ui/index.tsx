import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useUIContext } from '../../../UIProvider';
import React from 'react';
import { LanguageIcon } from '../../../../assets/icons/LanguageIcon';
import { styles } from './styles';
import { SettingsRow } from './components/settingsRow';

export const SettingsView = () => {
  const { t } = useUIContext();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const onGoToChangeLocale = () => { navigation.navigate("ChangeLocaleView"); };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {t("settings.greetingMessage")} {t("settings.chooseLanguage")}
      </Text>
      <SettingsRow
        title={t("settings.language")}
        icon={<LanguageIcon />}
        onPress={onGoToChangeLocale}
      />
    </View>
  );
};

