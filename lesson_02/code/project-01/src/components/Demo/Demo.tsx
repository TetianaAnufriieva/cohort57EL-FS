import { useEffect, useState } from "react";

export default function Demo() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);

  // useEffect - принимает callback функ и массив зависимостей. Есть три варианта
  // useEffect придумали для создания fetch-запросов, удобный механизм для запуска функ 

  // вариант 1 - без массива зависимостей при первом рендере и при последующих ререндерах (при любых изменениях)
  useEffect(() => {
    console.log("Variant 1 - no array");
  });

  // вариант 2 - с пустым массивом зависимостей ТОЛЬКО при первом рендере
  useEffect(() => {
    console.log("Variant 2 - emty depencies array!");
  }, []);

  // вариант 3 - с массивом зависимостей при первом рендере, и если переменная в массиве изменится (при изменении зависимостей)
  useEffect(() => {
    console.log("Variant 3 - with depencies array!");
  }, [age]);

  return (
    <div>
      <h2>
        Demo Age: {age} Weight: {weight}
      </h2>
      <button type="button" onClick={() => setAge((prev) => prev + 1)}>
        +1 Age
      </button>
      <button type="button" onClick={() => setWeight((prev) => prev + 1)}>
        +1 Weight
      </button>
    </div>
  );
}

// Component lifecycle
// 1 - Mount - установка - первый рендер на экране
// 2 - Update - изменение - когда любые ререндеры
// 3 - Unmount - размонтирование - когда компонент исчезает с экрана
