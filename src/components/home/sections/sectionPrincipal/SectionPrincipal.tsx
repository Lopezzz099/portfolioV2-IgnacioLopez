"use client";

import React from "react";
import styles from "./SectionPrincipal.module.css";
import stylesSection from "../Sections.module.css";
import Github from "@/components/icons/github/Github";
import Linkedin from "@/components/icons/linkedin/Linkedin";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SectionPrincipal = () => {
  const t = useTranslations("SectionPrincipal");

  return (
    <section className={stylesSection.sections} id="Inicio">
      <div className={styles.container}>
        <div style={{ width: "100%" }}>
          <h1 className={styles.title}>
            {t("title")}{" "}
            <span className={styles.spanTitle}>{t("titleSpan")}</span>{" "}
            {t("title2")}
          </h1>
          <p className={styles.description}>
            {t("description")}{" "}
            <span className={styles.span}>
              <button
                onClick={() => {
                  const section = document.getElementById("Proyectos");
                  if (section) {
                    const offset = section.offsetTop - 180;
                    window.scrollTo({ top: offset, behavior: "smooth" });
                  }
                }}
              >
                {t("descriptionSpan")}
              </button>
            </span>{" "}
            {t("description2")}
          </p>
        </div>
        <div className={styles.icons}>
          <Link href={"https://github.com/Lopezzz099"}>
            <Github size={45} />
          </Link>
          <Link href={"https://www.linkedin.com/in/ignacio-lopezzz/"}>
            <Linkedin size={45} />
          </Link>
        </div>
      </div>
      <div className={styles.container2}>
        <button
          className={styles.a1}
          onClick={() => {
            const section = document.getElementById("Contactame");
            if (section) {
              const offset = section.offsetTop - 180;
              window.scrollTo({ top: offset, behavior: "smooth" });
            }
          }}
        >
          {t("contact")}
        </button>
        <a
          href={
            "https://drive.google.com/file/d/1TfdnlAyFveV5jCCECCIteTVH3gaKZ0tW/view?usp=sharing"
          }
          target={"_blank"}
          className={styles.a2}
        >
          {t("resume")}
        </a>
      </div>
    </section>
  );
};

export default SectionPrincipal;
