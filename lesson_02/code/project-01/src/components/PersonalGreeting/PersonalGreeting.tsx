import { useState } from "react";
import styles from "./PersonalGreeting.module.css";

export default function PersonalGreeting() {
  const [name, setName] = useState("John Dowson");

  return (
    <div className={styles.container}>
      <h2>It's nice to meet you, {name} </h2>

      {/* контролируемый input  */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>

    </div>
  );
}

// John Dowson = Max Musterman
