export interface ILocalization {
    locales: string[];
    locale: "uk" | "en" | string;
    t: (key:string, params?: Record<string, any>) => string;
    setLocale: (value: string) => void;
}