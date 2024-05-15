import React from "react";
import stylesSection from "../Sections.module.css";
import styles from "./SectionSobreMi.module.css";
import Image from "next/image";

const SectionSobreMi = () => {
  return (
    <section className={stylesSection.sections} id="SobreMi">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Sobre Mi<span className={styles.spanTitleLine}></span>
        </h2>
        <div className={styles.description}>
          <p className={styles.text}>
            Si te has detenido aquí, ante todo, gracias por tu interés.
            Permíteme presentarme de nuevo. Soy Ignacio López y trabajo como
            desarrollador Front-End. Desde mi ciudad, Bahía Blanca, he terminado
            mi carrera en Certified Tech Developer con orientación en Front-End.
            <br />
            <br />
            A lo largo de esta formación, he adquirido conocimientos en diversos
            campos, desde mis primeras páginas web con HTML y CSS hasta la
            creación de páginas con Next.js y aplicaciones con React Native. No
            sé qué será lo siguiente, pero estaremos preparados.
            <br />
            <br />
            Como freelancer y estudiante, he participado en proyectos simples
            como páginas estáticas hasta grandes y complejos como un E-commerce
            o una página de control de Dungeons & Dragons. Disfruto recordar
            todos los proyectos en los que he participado, tanto individualmente
            como en equipo.
            <br />
            <br />
            Actualmente, estoy abierto a nuevos proyectos. Ya sea para acompañar
            nuevas ideas hacia el éxito o para unirme a aventuras consolidadas
            en busca de nuevos horizontes, estoy a tu disposición.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src={"/Handcoding-amico.png"}
              width={900}
              height={1000}
              alt={"profile"}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSobreMi;
