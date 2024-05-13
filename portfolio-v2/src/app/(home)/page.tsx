import Nav from "@/components/common/nav/Nav";
import styles from "./page.module.css";
import SectionPrincipal from "@/components/home/sections/sectionPrincipal/SectionPrincipal";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div style={{height: "73px", width: "100%"}}></div>
      <main className={styles.main}>
        <SectionPrincipal />
        <div style={{width: "100%", height: "200vh"}}>

        </div>
      </main>
    </>
  );
}
