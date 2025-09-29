import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="container mt-4">
      <h1>Добро пожаловать на наш сайт!</h1>
      <br />
      <p>Здесь вы можете познакомиться с нашими проектами</p>
    </div>
  );
}
