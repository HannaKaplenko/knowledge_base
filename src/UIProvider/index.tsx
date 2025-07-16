import React, { createContext, FC, useContext, useEffect } from "react";
import { useLocalization } from "./localization/useLocalization";
import { ILocalization } from "./localization/ILocalization"

interface IUIContext {
  locales: string[];
  locale: "uk" | "en" | string;
  setLocale: (locale: string) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

export const UIContext = createContext <IUIContext> ({} as any);

export const useUIContext = () => {
    return useContext(UIContext);
};

interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

export const UIProvider: FC<IProps> = ({ children }) => {
    const { locales, locale, onHandleChangeLocale, t } = useLocalization();

    const value = {
        locales,
        locale,
        setLocale: onHandleChangeLocale,
        t
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
} 