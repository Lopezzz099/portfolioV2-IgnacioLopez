'use client';

import React, { useEffect } from "react";
import styles from "./ProyectAlquilerAutos.module.css";
import stylesProyects from "../Proyects.module.css";
import Github from "@/components/icons/github/Github";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AOS from 'aos';

const ProyectAlquilerAutos = () => {
  // AOS se inicializa en un efecto secundario
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
    });
  }, []);
  const t = useTranslations("SectionProyectos.proyects.proyectAlquilerAutos");
  return (
    <article className={stylesProyects.articleLeft} data-aos="fade-left">
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
        <h3 className={styles.title}>{t("title")}</h3>
        <p className={styles.description}>
          {t("description")}
          <br />
          <br />
          {t("description2")}
          <br />
          <br />
          {t("description3")}
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
