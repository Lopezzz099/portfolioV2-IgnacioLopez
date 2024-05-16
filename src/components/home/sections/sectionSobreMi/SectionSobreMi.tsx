import React from "react";
import stylesSection from "../Sections.module.css";
import styles from "./SectionSobreMi.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SectionSobreMi = () => {
  const t = useTranslations("SectionSobreMi");
  return (
    <section className={stylesSection.sections} id="SobreMi">
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t("title")}<span className={styles.spanTitleLine}></span>
        </h2>
        <div className={styles.description}>
          <p className={styles.text}>
            {t("description")}
            <br />
            <br />
            {t("description2")}
            <br />
            <br />
            {t("description3")}
            <br />
            <br />
            {t("description4")}
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={"/Handcoding-amico.png"}
              width={900}
              height={1000}
              alt={"profile"}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSobreMi;
