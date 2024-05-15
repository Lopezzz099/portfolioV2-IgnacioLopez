import React from "react";
import styles from "./SectionHabilidades.module.css";
import stylesSection from "../Sections.module.css";
import ReactIcon from "@/components/icons/react/ReactIcon";
import HtmlIcon from "@/components/icons/html/HtmlIcon";
import CssIcon from "@/components/icons/css/CssIcon";
import JavascriptIcon from "@/components/icons/javascript/JavascriptIcon";
import TypescriptIcon from "@/components/icons/typescript/TypescriptIcon";
import ReactRouterIcon from "@/components/icons/reactRouter/ReactRouterIcon";
import NextjsIcon from "@/components/icons/nextjs/NextjsIcon";
import JestIcon from "@/components/icons/jest/JestIcon";
import ReduxIcon from "@/components/icons/redux/ReduxIcon";
import GitIcon from "@/components/icons/git/GitIcon";
import NpmIcon from "@/components/icons/npm/NpmIcon";
import PostmanIcon from "@/components/icons/postman/PostmanIcon";
import FigmaIcon from "@/components/icons/figma/FigmaIcon";
import NodejsIcon from "@/components/icons/nodejs/Nodejs";

const SectionHabilidades = () => {
  return (
    <section className={stylesSection.sections} id="Habilidades">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Habilidades<span className={styles.spanTitleLine}></span>
        </h2>
        <div className={styles.skills}>
          <HtmlIcon/>
          <CssIcon/>
          <JavascriptIcon/>
          <TypescriptIcon/>
          <ReactIcon/>
          <ReactRouterIcon/>
          <JestIcon/>
          <ReduxIcon/>
          <NextjsIcon/>
          <GitIcon/>
          <NpmIcon/>
          <PostmanIcon/>
          <FigmaIcon/>
          <NodejsIcon/>
        </div>
      </div>
    </section>
  );
};

export default SectionHabilidades;
