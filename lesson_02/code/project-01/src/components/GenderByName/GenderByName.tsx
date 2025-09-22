import { useState } from "react";
import styles from "./GenderByName.module.css";
const URL_GenderByName = "https://api.genderapi.io/api/?name=";

interface GenderResponse {
  name: string;
  gender: string | null;
  country: string;
  probability: number;
  remaining_credits: number;
}

export default function GenderByName() {
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<GenderResponse | null>(null);
  const [message, setMessage] = useState("");

  async function getGenderByName() {
    if (!name.trim()) {
      setMessage("Enter the name");
      setData(null);
      return;
    }

    try {
      const res = await fetch(URL_GenderByName + name);
      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Too many requests");
        } else {
          throw new Error(`Ошибка: ${res.status}`);
        }
      }

      const obj: GenderResponse = await res.json();
      setData(obj);
      setMessage("");
      console.log(obj);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error?.message);
      }
    }
  }
  return (
    <div className={styles.container}>
      <h2>Gender By Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={getGenderByName}>
        Send
      </button>
      {message ? (
        <p>{message}</p>
      ) : (
        data && (
          <div>
            <p>
              <b>Имя:</b> {data.name}
            </p>
            <p>
              <b>Пол:</b> {data.gender === "male" ? "мужской" : "женский"}
            </p>
            <p>
              <b>Страна:</b> {data.country}
            </p>
            <p>
              <b>Вероятность:</b> {data.probability}%
            </p>
            <p>
              <b>Остаток запросов:</b> {data.remaining_credits}
            </p>
          </div>
        )
      )}
    </div>
  );
}
