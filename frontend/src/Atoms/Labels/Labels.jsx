import React, { useContext } from "react";
import GlobalContext from "../../GlobalContext";
import styles from "./Labels.module.css";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);

  return (
    <>
      <p className={styles.label}>Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`${styles.checkbox} text-${lbl}-400 ${
              checked && styles.checked
            }`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}
    </>
  );
}
