/*Задание:
Создайте тип Astronaut (Космонавт), у которого есть следующие поля:

isInSpace — булево значение (находится ли в космосе)
experienceYears — число (сколько лет опыта)
assistantRobot — объект типа Robot
missions — массив строк, например: ["Moon Landing", "ISS Maintenance"]
Тип Robot должен быть объектом с ключом model (например, { model: "XR-12" }).

Затем создайте типизированные переменные, используя эти типы.
*/

type Missions = "Moon Landing" | "ISS Maintenance";
interface Robot {
    model: string;
}

interface Astronaut {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: Missions[];
}

const astronaut: Astronaut = {
    isInSpace: true,
    experienceYears:5,
    assistantRobot: {model: "XR-12"},
    missions: ["Moon Landing", "ISS Maintenance"]
}

console.log(astronaut);
