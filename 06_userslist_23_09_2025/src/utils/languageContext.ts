import { createContext, type Dispatch, type SetStateAction } from "react";

// 1. Типизация и создание контекста (данный этап мог быть реализован в отдельном файле)
export interface ILanguageContext {
  language: "ru" | "en" | "de";
  setLanguage: Dispatch<SetStateAction<"ru" | "en" | "de">>;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: "ru",
  setLanguage: () => {},
});
