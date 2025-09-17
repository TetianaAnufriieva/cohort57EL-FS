import "./App.css";
import Counter from "./components/Counter/Counter";
import Demo from "./components/Demo/Demo";
// import AgeInfo from "./components/AgeInfo/AgeInfo";
import DogCard from "./components/DogCard/DogCard";
import GenderByName from "./components/GenderByName/GenderByName";
// import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import Nationality from "./components/Nationality/Nationality";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  return (
    <div>
      {/* <p>Hello, React!</p> */}
      <GenderByName />
      <PersonalGreeting />
      <Greeting />
      <Demo />
      <Nationality />
      <Counter />
      <DogCard />
      <ProfileCard avatar={"https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png"} name={"Иванова Ирина Ивановна"} description={"Фанатка спорта, книг и хорошего кофе"} />
      {/* <Greeting />
      <Greeting />
      <Goodbye name={"Bob"} />
      <Goodbye name={"John"} />
      <AgeInfo age={25} name={"Bob"}/> */}
      <SpaceMissionForm />
    </div>
  );
}

export default App;

// Создайте компонент, кот. выводит на экран
// It was nice to see you!
// Назовите компонент Goodbye

// Создать компонент AgeInfo, который бы отображал текст
// I'm <number> old
