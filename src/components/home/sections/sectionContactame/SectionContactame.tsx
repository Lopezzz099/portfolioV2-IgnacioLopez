import React from "react";
import styles from "./SectionContactame.module.css";
import stylesSection from "../Sections.module.css";
import FormContactMe from "../../formContactMe/FormContactMe";

const SectionContactame = () => {
  return (
    <section className={stylesSection.sections} id="Contactame">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Contactame<span className={styles.spanTitleLine}></span>
        </h2>
        <FormContactMe/>
      </div>
    </section>
  );
};

export default SectionContactame;
