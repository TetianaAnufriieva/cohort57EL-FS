import { useState } from "react";

export default function Counter() {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);
  // переменная состояния == state
  // функция setter - вызывать rerender компонента

  //   деструктизация массива
  //   const arr = [10, 17];
  //   const ten = arr[0];
  //   const seventeen = arr[1];
  //   const [ten, seventeen] = arr;

  // Что нужно знать о каждом хук (-Это готовое решение) или функц. (useState)?
  //  - что принимает? начальное значение переменной состояния
  //  - что возвращает? кортеж "tuple" (массив с разными типами данных), где на первом месте переменная состояния, т.е. state, а на втором месте - функуция setter
  //  - что делает? Создает стейт, изменения которго вызывают ререндер
  //

  function printCounter() {
    console.log(counter);
  }
  function handleAddOne() {
    setCounter(counter + 1);
  }

  function handleMinusTwo() {
    // setCounter(counter - 2);

    // рекомендованный вариант создателями react
    setCounter ((prev) => prev -2); // prev - можно задать любое имя
  }
  
    function handleResetOne() {
    setCounter(0);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={handleAddOne}>+1</button>
      <button type="button" onClick={() => {setCounter((prev) => prev - 1 )}}>-1</button>
      <button type="button" onClick={printCounter}>Print to console</button>
      <button type="button" onClick={handleResetOne}>Reset</button>
      <button type="button" onClick={handleMinusTwo}>-2</button>
    </div>
  );
}
