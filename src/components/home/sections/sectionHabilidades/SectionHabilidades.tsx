'use client';

import React from 'react';
import styles from './SectionHabilidades.module.css';
import stylesSection from '../Sections.module.css';
import HtmlIcon from '@/components/icons/html/HtmlIcon';
import CssIcon from '@/components/icons/css/CssIcon';
import JavascriptIcon from '@/components/icons/javascript/JavascriptIcon';
import TypescriptIcon from '@/components/icons/typescript/TypescriptIcon';
import ReactIcon from '@/components/icons/react/ReactIcon';
import ReactRouterIcon from '@/components/icons/reactRouter/ReactRouterIcon';
import NextjsIcon from '@/components/icons/nextjs/NextjsIcon';
import JestIcon from '@/components/icons/jest/JestIcon';
import ReduxIcon from '@/components/icons/redux/ReduxIcon';
import GitIcon from '@/components/icons/git/GitIcon';
import NpmIcon from '@/components/icons/npm/NpmIcon';
import PostmanIcon from '@/components/icons/postman/PostmanIcon';
import FigmaIcon from '@/components/icons/figma/FigmaIcon';
import NodejsIcon from '@/components/icons/nodejs/Nodejs';
import { useTranslations } from 'next-intl';
import EmblaCarousel from '@/components/common/EmblaCarousel/EmblaCarousel';

const SectionHabilidades = () => {
  const t = useTranslations('SectionHabilidades');
  
  const slides = [
    <HtmlIcon key={0}/>,
    <CssIcon  key={1}/>,
    <JavascriptIcon  key={2}/>,
    <TypescriptIcon  key={3}/>,
    <ReactIcon  key={4}/>,
    <ReactRouterIcon  key={5}/>,
    <JestIcon  key={6}/>,
    <ReduxIcon  key={7}/>,
    <NextjsIcon  key={8}/>,
    <GitIcon  key={9}/>,
    <NpmIcon  key={10}/>,
    <PostmanIcon  key={11}/>,
    <FigmaIcon  key={12}/>,
    <NodejsIcon  key={13}/>,
  ];

  return (
    <section className={stylesSection.sections} id="Habilidades">
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t('title')}<span className={styles.spanTitleLine}></span>
        </h2>
        <EmblaCarousel slides={slides} options={{ loop: true }} />
      </div>
    </section>
  );
};

export default SectionHabilidades;

