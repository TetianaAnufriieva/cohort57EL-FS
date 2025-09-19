import type { JSX } from "react";
import Car from "../Car/Car";
import hondaLogo from "./img/honda-step-wgn.jpg";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>CarShop</h1>
      <h2>Cars</h2>
      <Car brand={"Mercedes"} color={"black"} />
      <Car brand={"Tesla"} color={"green"} />
      <Car brand={"BMW"} color={"pink"} />
      <Car brand={"Lada"} color={"violet"} />
      <Car brand={"Audi"} color={"yellow"} />
      <Car brand={"Honda"} color={"red"} />
      <Car brand={"Kia"} color={"blue"} />
      <h1>Первый способ подгрузить изображение через импорт</h1>
      <img src={hondaLogo} alt="honda logo"/>
      <h1>Второй способ подгрузить изображение из папки public, без точки перед слеш</h1>
      <img src="/lada.jpg" alt="lada logo"/>
    </div>
  );
}
