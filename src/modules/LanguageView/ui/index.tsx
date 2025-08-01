import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useUIContext } from '../../../UIProvider';

export const ChangeLocaleView = () => {
    const { locale, setLocale, t } = useUIContext();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('settings.chooseLanguage')}</Text>
            <TouchableOpacity
                style={[styles.button, locale === 'uk' && styles.activeButton]}
                onPress={() => setLocale('uk')}
            >
                <Text style={styles.buttonText}>Українська</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, locale === 'en' && styles.activeButton]}
                onPress={() => setLocale('en')}
            >
                <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>
        </View>
    );
};
