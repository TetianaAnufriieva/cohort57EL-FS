import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";
// import spaceman from "../../assets/space_man.webp";

type Planet = "mars" | "jupiter" | "venus" | "earth";

function SpaceMissionForm() {
  const [astronautName, setAstronautName] = useState<string>("");
  const [planet, setPlanet] = useState<Planet>("mars");
  const options = [
    { value: "mars", label: "Mars" },
    { value: "jupiter", label: "Jupiter" },
    { value: "venus", label: "Venus" },
    { value: "earth", label: "Earth" },
    { value: "mars", label: "Mars" },
  ];

  return (
    <div className={styles.containerSpaceMissionForm}>
      <h2>Space Mission</h2>

      {/* Вставка картинок. Есть 3 способа */}
      {/* Вариант 1 - Через публичную папку. Файлы лежат как есть → хеширования нет, браузер может показывать старое. */}
      <img src="/images/space_man.webp" alt="astronaut" />

      {/* Вариант 2 - Через импорт ассета. Сборщик автоматически добавит хеш к файлам → защита от устаревшего кэша.*/}
      {/* <img 
      src={spaceman} 
      alt="astronaut" /> */}

      {/* Вариант 3 - прямая ссылка из интернета, указали абсолютный адрес */}
      <img
        src="https://i.etsystatic.com/46367071/r/il/b5741c/6276173358/il_570xN.6276173358_l2aj.jpg"
        alt="astronaut from internet"
      />

      <div>
        {astronautName.trim() === "" ? (
          <p>Please enter your name to begin your mission.</p>
        ) : (
          <p>
            Astronaut {astronautName} is going to {planet}!
          </p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the astronaut's name"
          value={astronautName}
          onChange={(event) => setAstronautName(event.target.value)}
        ></input>
      </div>
      <div>
        <label>Destination planet</label>
        <select
          name="planet"
          value={planet}
          onChange={(event) => setPlanet(event.target.value as Planet)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} label={option.label} />
          ))}
        </select>
      </div>
    </div>
  );
}

export default SpaceMissionForm;
