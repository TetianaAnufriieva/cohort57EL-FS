import "./App.css";
import AgeInfo from "./components/AgeInfo/AgeInfo";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";

function App() {
  return (
    <div>
      <p>Hello, React!</p>
      <Greeting />
      <Greeting />
      <Greeting />
      <Goodbye name={"Bob"} />
      <Goodbye name={"John"} />
      <AgeInfo age={25} name={"Bob"}/>
    </div>
  );
}

export default App;

// Создайте компонент, кот. выводит на экран
// It was nice to see you!
// Назовите компонент Goodbye

// Создать компонент AgeInfo, который бы отображал текст
// I'm <number> old
