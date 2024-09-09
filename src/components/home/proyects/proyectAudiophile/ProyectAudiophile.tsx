'use client';

import React, { useEffect } from "react";
import styles from "./ProyectAudiophile.module.css";
import stylesProyects from "../Proyects.module.css";
import Github from "@/components/icons/github/Github";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AOS from 'aos';

const ProyectAudiophile = () => {
  // AOS se inicializa en un efecto secundario
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
    });
  }, []);
  const t = useTranslations("SectionProyectos.proyects.proyectAudiophile");
  return (
    <article className={stylesProyects.articleRight} data-aos="fade-right">
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

export default ProyectAudiophile;
