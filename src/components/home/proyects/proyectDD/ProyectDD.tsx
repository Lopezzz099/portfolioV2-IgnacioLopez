import React from "react";
import styles from "./ProyectDD.module.css";
import stylesProyects from "../Proyects.module.css";
import Github from "@/components/icons/github/Github";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ProyectDD = () => {
  const t = useTranslations("SectionProyectos.proyects.proyectDD");
  return (
    <article className={stylesProyects.articleLeft}>
      <a href="https://proyecto-dnd.vercel.app/landing" className={styles.linkProyect}>
        <div className={styles.imageContainer}>
          <Image src="/proyecto-dnd.vercel.app_landing.png" width={1000} height={400} alt="proyectoDD" className={styles.image}/>
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

export default ProyectDD;
