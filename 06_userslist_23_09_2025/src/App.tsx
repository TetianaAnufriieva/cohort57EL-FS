import {Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList/UserList";
import CommentList from "./components/Comment/CommentList";
import UserDetails from "./components/UserList/UserDetails";
import CommentDetails from "./components/Comment/CommentDetails";
import PostList from "./components/Post/PostList";
import PostDetails from "./components/Post/PostDetails";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { createContext, useContext, type Dispatch, type SetStateAction } from "react";

// 1. Типизация и создание контекста (данный этап мог быть реализован в отдельном файле)
export interface IThemeContext {
  theme: "light" | "dark",
  setTheme: Dispatch<SetStateAction<"light" | "dark">>

}


export const ThemeContext = createContext<IThemeContext>({
theme: "light",
setTheme: ( ) => {}

})

// SPA - Single Page Application
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* home отрисовуется при первичной отрисовке */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/comments" element={<CommentList />} />
          {/* 1. Добавление нового маршрута и информации об отображаемом компоненте на данном маршруте */}
          <Route path="/comments/:id" element={<CommentDetails />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
