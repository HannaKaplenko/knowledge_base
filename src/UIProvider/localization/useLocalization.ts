import { useEffect, useMemo, useState } from "react";
import { storage } from "../../libs/storage/AsyncStorage";
import en from "./translation/en.json"
import uk from "./translation/uk.json"
import { I18n } from "i18n-js";

const i18n = new I18n();
i18n.enableFallback = true;
i18n.translations = { uk, en };

export const useLocalization = () => {
    const [locale, setLocale] = useState<string>("uk");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLanguage = async () => {
            const data = await storage.getItem("LANGUAGE");
            if (data === "en" || data === "uk") {
                setLocale(data);
                i18n.locale = data;
            }
            setLoading(false);
        };
        loadLanguage();
    }, []);

    useEffect(() => {
        i18n.locale = locale;
    }, [locale]);

    const locales = useMemo(() =>
        Object.keys(i18n.translations), []);

    const onHandleChangeLocale = async (newLanguage: "uk" | "en" | string) => {
        setLocale(newLanguage);
        await storage.setItem("LANGUAGE", newLanguage);

    };

    const t = (key: string, params: Record<string, any> = {}) => {
        return i18n.t(key, { locale: locale, ...params });
    };

    return { locales, locale, onHandleChangeLocale, t, loading };
}