import Nav from "@/components/common/nav/Nav";
import styles from "./page.module.css";
import SectionPrincipal from "@/components/home/sections/sectionPrincipal/SectionPrincipal";
import SectionSobreMi from "@/components/home/sections/sectionSobreMi/SectionSobreMi";
import SectionHabilidades from "@/components/home/sections/sectionHabilidades/SectionHabilidades";
import SectionProyectos from "@/components/home/sections/sectionProyectos/SectionProyectos";
import SectionContactame from "@/components/home/sections/sectionContactame/SectionContactame";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div style={{height: "73px", width: "100%"}}></div>
      <main className={styles.main}>
        <SectionPrincipal />
        <SectionSobreMi/>
        <SectionHabilidades/>
        <SectionProyectos/>
        <SectionContactame/>
      </main>
    </>
  );
}
