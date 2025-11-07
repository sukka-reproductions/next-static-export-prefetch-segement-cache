import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/a">Go to A</Link>
        <Link href="/b">Go to B</Link>
        <Link href="/c">Go to C</Link>
        <Link href="/d">Go to D</Link>
        <Link href="/e">Go to E</Link>
      </main>
    </div>
  );
}
