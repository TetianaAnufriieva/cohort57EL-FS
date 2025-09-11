import "./App.css";
import Counter from "./components/Counter/Counter";
// import AgeInfo from "./components/AgeInfo/AgeInfo";
import DogCard from "./components/DogCard/DogCard";
// import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div>
      {/* <p>Hello, React!</p> */}
      <PersonalGreeting />
      <Greeting />
      <Counter />
      <DogCard />
      <ProfileCard avatar={"https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png"} name={"Иванова Ирина Ивановна"} description={"Фанатка спорта, книг и хорошего кофе"} />
      {/* <Greeting />
      <Greeting />
      <Goodbye name={"Bob"} />
      <Goodbye name={"John"} />
      <AgeInfo age={25} name={"Bob"}/> */}
    </div>
  );
}

export default App;

// Создайте компонент, кот. выводит на экран
// It was nice to see you!
// Назовите компонент Goodbye

// Создать компонент AgeInfo, который бы отображал текст
// I'm <number> old
