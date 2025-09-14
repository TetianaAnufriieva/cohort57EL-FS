import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";

function SpaceMissionForm() {
  const [astronautName, setAstronautName] = useState("");
  const [planet, setPlanet] = useState("");
  return (
    <div className={styles.containerSpaceMissionForm}>
      <div>
        {astronautName.trim() === "" ? (
          <p>Please enter your name to begin your mission.</p>
        ) : planet === "" ? (
          <p> {astronautName} please choose your destination planet.</p>
        ) : (
          <p>
            Astronaut {astronautName} is headed to {planet}!
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
          value={planet}
          onChange={(event) => setPlanet(event.target.value)}
        >
          <option> </option>
          <option>Mars</option>
          <option>Venus</option>
          <option>Jupiter</option>
          <option>Saturn</option>
        </select>
      </div>
    </div>
  );
}

export default SpaceMissionForm;
