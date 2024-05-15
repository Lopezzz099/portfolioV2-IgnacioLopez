"use client";

import React from "react";
import styles from "./SectionPrincipal.module.css";
import stylesSection from "../Sections.module.css";
import Github from "@/components/icons/github/Github";
import Linkedin from "@/components/icons/linkedin/Linkedin";
import Link from "next/link";

const SectionPrincipal = () => {
  return (
    <section className={stylesSection.sections} id="Inicio">
      <div className={styles.container}>
        <div style={{ width: "100%" }}>
          <h1 className={styles.title}>
            Soy un desarrollador{" "}
            <span className={styles.spanTitle}>Front-end</span>
          </h1>
          <p className={styles.description}>
            ¡Bienvenido a mi portfolio! Te ayudo a buscar y crear soluciones a
            tus necesidades tecnológicas. Aquí puedes ver los{" "}
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
                últimos trabajos
              </button>
            </span>{" "}
            de los que me he hecho cargo.
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
        <a href={"#Contacto"} className={styles.a1}>
          Contáctame
        </a>
        <a
          href={
            "https://drive.google.com/file/d/1TfdnlAyFveV5jCCECCIteTVH3gaKZ0tW/view"
          }
          target={"_blank"}
          className={styles.a2}
        >
          Currículum Vitae
        </a>
      </div>
    </section>
  );
};

export default SectionPrincipal;
