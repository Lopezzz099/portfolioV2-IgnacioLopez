import React from "react";
import styles from "./ProyectAlquilerAutos.module.css";
import stylesProyects from "../Proyects.module.css";
import Github from "@/components/icons/github/Github";
import Image from "next/image";

const ProyectAlquilerAutos = () => {
  return (
    <article className={stylesProyects.articleLeft}>
      <a
        href="https://dh-reservas-alvarezgonzalo0022s-projects.vercel.app/home"
        className={styles.linkProyect}
      >
        <div className={styles.imageContainer}>
          <Image
            src="/alquiler-autos-img.jpeg"
            width={1000}
            height={400}
            alt="proyectoDD"
            className={styles.image}
          />
          <span className={styles.spanImage}></span>
        </div>
      </a>
      <div className={styles.container}>
        <h3 className={styles.title}>Proyecto Alquiler de Autos</h3>
        <p className={styles.description}>
          Proyecto integrador del primer track de la carrera de Certified Tech
          Developer de Digital House. El objetivo del proyecto fue desarrollar
          una página web para el alquiler de autos.
          <br />
          <br />
          Mi rol en este proyecto fue como desarrollador Front-End. Ademas,
          quiero destacar el excelente trabajo en equipo que realizamos, lo cual
          fue fundamental para el éxito del proyecto.
          <br />
          <br />
          El proyecto fue realizado con React.js y JavaScript.
        </p>
        <a
          href="https://github.com/proyecto-dnd"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <Github size={25} />
          <span>CODE</span>
        </a>
      </div>
    </article>
  );
};

export default ProyectAlquilerAutos;
