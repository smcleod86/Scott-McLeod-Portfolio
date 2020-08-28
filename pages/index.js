import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Scott McLeod</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Scott McLeod </h1>
          <img src="/images/Scott.JPG" alt="Amazing photo of Scott, happy, in the mountains" className={styles.scott} />
          <p>I am a software engineer with a background in agriculture, and a love of the outdoors. I have an interest in collaborating to create solutions to complex problems using React, and MongoDB.</p>
        </div>
        <br>
        </br>
        <div>
          <h3>Reading Buddy</h3>
          <img src="/images/ReadingBuddyHomePage.png" alt="Screenshot of Reading Buddy App" className={styles.reading} />
          <p>Reading Buddy is a full stack app designed to give users the ability to search books, review books, and build friendships through common interests. Reading Buddy is a collaboration project utilizing Express, React, MongoDB, JavaScript and Node to create a unique environment for people to form connections.
          </p>
        </div>
        <br>
        </br>
        <div>
          <h3>Insplore</h3>
          <img src="/images/InsploreHomePage.png" alt="Screenshot of Inspore App" className={styles.insplore} />
          <p>Created using NextJS, Javascript, and Bootstrap, Inspore takes users on a mini adventure, without haveing to leave home. Click random to be taken to a random place in the world and learn about their culture and places of interest. If being transported anywhere is a bit intimidating, users can also search through a list of generated locations to learn more about the destination.</p>
        </div>
        <br>
        </br>
        <div>
          <h3>Get the Poo</h3>
        <img src="/images/GetThePooInstructions.png" alt="Screenshot of instuctions for 'Get the Poo' game" className={styles.instructions} />
        <img src="/images/GetThePooGameplay.png" alt="Screenshot of 'Get the Poo' gameplay" className={styles.poo} />
        <p>A goofy Space-Invaders styled game where the user must try to bag all the emojis, before they reach the bottom of the screen. Created using Vanilla JavaScript</p>
        </div>
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
