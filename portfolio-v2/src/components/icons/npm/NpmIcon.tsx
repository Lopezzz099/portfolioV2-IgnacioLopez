import React from "react";
import styles from "../Icons.module.css";

const NpmIcon = () => {
  return (
    <div className={styles.iconSkill}>
      <div className={styles.iconSkillImage}>
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="nonzero"
            clipRule="nonzero"
            d="M1 2.88462C1 1.84377 1.84377 1 2.88462 1H13.1154C14.1562 1 15 1.84377 15 2.88462V13.1154C15 14.1562 14.1562 15 13.1154 15H2.88462C1.84377 15 1 14.1562 1 13.1154V2.88462ZM2.88462 2.61538C2.73592 2.61538 2.61538 2.73592 2.61538 2.88462V13.1154C2.61538 13.2641 2.73592 13.3846 2.88462 13.3846H8.53846V6.38462C8.53846 5.93854 8.90008 5.57692 9.34615 5.57692C9.79223 5.57692 10.1538 5.93854 10.1538 6.38462V13.3846H13.1154C13.2641 13.3846 13.3846 13.2641 13.3846 13.1154V2.88462C13.3846 2.73592 13.2641 2.61538 13.1154 2.61538H2.88462Z"
            fill="#000000"
          />
        </svg>
      </div>
      <p className={styles.text}>NPM</p>
    </div>
  );
};

export default NpmIcon;
