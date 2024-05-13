import React from "react";
import styles from "./sectionPrincipal.module.css";
import stylesSection from "../sections.module.css";
import Github from "@/components/icons/github/Github";
import Linkedin from "@/components/icons/linkedin/Linkedin";
import Link from "next/link";

const SectionPrincipal = () => {
  return (
    <section className={stylesSection.sections} id="Inicio">
      <div className={styles.container}>
        <div style={{ width: "100%" }}>
          <h1 className={styles.title}>Soy un desarrollador Front-end</h1>
          <p className={styles.description}>
            ¡Bienvenido a mi portfolio! Te ayudo a buscar y crear soluciones a
            tus necesidades tecnológicas.
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
    </section>
  );
};

export default SectionPrincipal;
