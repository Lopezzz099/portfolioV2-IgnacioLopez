import React from "react";
import stylesSection from "../Sections.module.css";
import styles from "./SectionProyectos.module.css";
import ProyectDD from "../../proyects/proyectDD/ProyectDD";
import ProyectAudiophile from "../../proyects/proyectAudiophile/ProyectAudiophile";
import ProyectAlquilerAutos from "../../proyects/proyectAlquilerAutos/ProyectAlquilerAutos";

const SectionProyectos = () => {
  return (
    <section className={stylesSection.sections} id="Proyectos">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Proyectos<span className={styles.spanTitleLine}></span>
        </h2>
        <div className={styles.proyects}>
          <ProyectDD />
          <ProyectAudiophile />
          <ProyectAlquilerAutos />
        </div>
      </div>
    </section>
  );
};

export default SectionProyectos;
