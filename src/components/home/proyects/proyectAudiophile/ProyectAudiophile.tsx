import React from "react";
import styles from "./ProyectAudiophile.module.css";
import stylesProyects from "../Proyects.module.css";
import Github from "@/components/icons/github/Github";
import Image from "next/image";

const ProyectAudiophile = () => {
  return (
    <article className={stylesProyects.articleRight}>
      <a
        href="http://audiophileecomerce.s3-website.us-east-2.amazonaws.com/"
        className={styles.linkProyect}
      >
        <div className={styles.imageContainer}>
          <Image
            src="/audiophileecomerce.s3-website.us-east-2.amazonaws.com_.png"
            width={1000}
            height={400}
            alt="proyectoDD"
            className={styles.image}
          />
          <span className={styles.spanImage}></span>
        </div>
      </a>
      <div className={styles.container}>
        <h3 className={styles.title}>Proyecto Audiophile</h3>
        <p className={styles.description}>
          Proyecto hecho con un grupo de desarrolladores Front. El proyecto
          consistio en realizar una pagina web de ventas de auriculares y
          sonido.
          <br />
          <br />
          Mi rol en este proyecto fue de desarrollador Front-End. En este
          proyecto se hizo con un profesor que nos enseñaba nuevas tecnologias
          ademas de guiarnos en la realizacion del proyecto.
          <br />
          <br />
          El proyecto fue realizado con React.js, Redux, Formik, Yup, Axios y
          Material UI.
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

export default ProyectAudiophile;
