import styles from "./page.module.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
         <h1>Home page</h1>
      </main>
      <Footer />
    </>
  );
}
