import React from "react";
import styles from "../Icons.module.css";

const CssIcon = () => {
  return (
    <div className={styles.iconSkill}>
      <div className={styles.iconSkillImage}>
        <svg
          fill="#000000"
          width="80px"
          height="80px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.272 6.044L7.539 9.74H22.57l-.472 2.378H7.053l-.722 3.696h15.033l-.846 4.216-6.049 2.004-5.251-2.004.362-1.828H5.884L5 22.632l8.686 3.324 10.003-3.324L27 6.044z" />
        </svg>
      </div>
      <p className={styles.text}>CSS</p>
    </div>
  );
};

export default CssIcon;
