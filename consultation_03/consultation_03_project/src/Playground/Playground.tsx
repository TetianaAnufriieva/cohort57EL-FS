import { useEffect, useState, type JSX } from "react";

export default function Playground(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

  function handleAddDog(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }

  function handleAddBird(): void {
    setNumberOfBirds(numberOfBirds + 1);
  }

  // Пример 1 пустой массив зависимостей
  useEffect(() => {
    console.log("UseEffect 1 - только при первой отрисовке === mount");
  }, []);

  // Пример 2 без массива зависимостей
  useEffect(() => {
    console.log(
      "UseEffect 2 - при первой отрисовке и при любых изменениях === update"
    );
  });

  // Пример 3 указываем массив зависимостей
  useEffect(() => {
    console.log(
      "UseEffect 3 - при первой отрисовке и при изменении переменных numberOfBirds" 
    );
  }, [numberOfBirds]);

  return (
    <div>
      <h1>Playground</h1>
      <p>Number Of Dogs {numberOfDogs}</p>
      <p>Number Of Birds {numberOfBirds}</p>
      <button type="button" onClick={handleAddDog}>
        Let the dog in
      </button>
      <button type="button" onClick={handleAddBird}>
        New bird
      </button>
    </div>
  );
}

// Component lifcycle - жизненный цикл компонента
// Этапы жизненого цикла:
// Mount - первая отрисовка компонента на странице
// Update - изменение
// Unmount - когда перестает отрисовываться
