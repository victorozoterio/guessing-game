import styles from "./styles.module.css";

import { Letter } from "../letter";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="x" size="small" />
        <Letter value="r" size="small" />
      </div>
    </div>
  );
}
