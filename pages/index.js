import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Scott McLeod
        </h1>
        <img src="/images/Scott.JPG" className={styles.scott} />
        <img src="/images/ReadingBuddyHomePage.png" className={styles.reading} />
        <img src="/images/InsploreHomePage.png" className={styles.insplore} />
        <img src="/images/GetThePooInstructions.png" className={styles.instructions} />
        <img src="/images/GetThePooGameplay.png" className={styles.poo} />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
