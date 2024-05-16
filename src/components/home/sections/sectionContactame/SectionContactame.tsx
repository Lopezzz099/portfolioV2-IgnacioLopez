import React from "react";
import styles from "./SectionContactame.module.css";
import stylesSection from "../Sections.module.css";
import FormContactMe from "../../formContactMe/FormContactMe";
import { useTranslations } from "next-intl";

const SectionContactame = () => {
    const t = useTranslations("SectionContactame");
  return (
    <section className={stylesSection.sections} id="Contactame">
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t("title")}<span className={styles.spanTitleLine}></span>
        </h2>
        <FormContactMe/>
      </div>
    </section>
  );
};

export default SectionContactame;
