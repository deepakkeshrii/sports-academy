import styles from "./page.module.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
         <Hero />
      </main>
      <Footer />
    </>
  );
}
