import React from "react";
import styles from "./ProyectDD.module.css";
import stylesProyects from "../Proyects.module.css";
import Github from "@/components/icons/github/Github";
import Image from "next/image";

const ProyectDD = () => {
  return (
    <article className={stylesProyects.articleLeft}>
      <a href="https://proyecto-dnd.vercel.app/landing" className={styles.linkProyect}>
        <div className={styles.imageContainer}>
          <Image src="/proyecto-dnd.vercel.app_landing.png" width={1000} height={400} alt="proyectoDD" className={styles.image}/>
          <span className={styles.spanImage}></span>
        </div>
      </a>
      <div className={styles.container}>
        <h3 className={styles.title}>Proyecto D&D</h3>
        <p className={styles.description}>
          Proyecto integrador del segundo track de la carrera de Certified Tech
          Developer de Digital House. El proyecto consistio en realizar una
          pagina web de gestion de campañas de Dungeons & Dragons.
          <br />
          <br />
          Mi rol en este proyecto fue de desarrollador Front-End. Ademas, hubo
          un gran trabajo en equipo utilizando distintas metodologias agiles,
          como Scrum y Kanban.
          <br />
          <br />
          El proyecto fue realizado con Next.js y Typescript.
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

export default ProyectDD;
