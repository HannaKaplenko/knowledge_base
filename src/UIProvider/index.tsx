import React, { createContext, FC, useContext } from "react";
import { useLocalization } from "./localization/useLocalization";

interface IUIContext {
    locales: string[];
    locale: "uk" | "en" | string;
    setLocale: (locale: string) => void;
    t: (key: string, params?: Record<string, any>) => string;
}

export const UIContext = createContext<IUIContext>({} as any);

export const useUIContext = () => {
    return useContext(UIContext);
};

interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

export const UIProvider: FC<IProps> = ({ children }) => {
    const { locales, locale, onHandleChangeLocale, t, loading } = useLocalization()
    if (loading) {
        return null;
    }

    const value = {
        locales,
        locale,
        setLocale: onHandleChangeLocale,
        t
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
} 