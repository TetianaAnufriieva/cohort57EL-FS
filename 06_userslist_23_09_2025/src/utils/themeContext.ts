import { createContext, type Dispatch, type SetStateAction } from "react"

// 1. Типизация и создание контекста (данный этап мог быть реализован в отдельном файле)
export interface IThemeContext {
  theme: "light" | "dark",
  setTheme: Dispatch<SetStateAction<"light" | "dark">>
}

export const ThemeContext = createContext<IThemeContext>({
theme: "light",
setTheme: ( ) => {}
})