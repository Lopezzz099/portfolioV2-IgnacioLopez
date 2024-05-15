import Nav from "@/components/common/nav/Nav";
import styles from "./page.module.css";
import SectionPrincipal from "@/components/home/sections/sectionPrincipal/SectionPrincipal";
import SectionSobreMi from "@/components/home/sections/sectionSobreMi/SectionSobreMi";
import SectionHabilidades from "@/components/home/sections/sectionHabilidades/SectionHabilidades";

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
        <div style={{width: "100%", height: "200vh"}}>

        </div>
      </main>
    </>
  );
}
