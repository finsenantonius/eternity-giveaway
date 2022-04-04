import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            <Link href='/'>
              <a>
                <div className={styles.logo}>
                  <Image src="/images/eternity-logo2.webp" width={2001} height={826} alt="Eternity Logo" layout='responsive' />
                </div>
              </a>
            </Link>
          </div>
        </header>

        <div className={styles.main}>
          <div className={styles.mainWrapper}>
            <div className={styles.mainContent}>
              <div className={styles.mainLeft}>
                <h1 className={styles.mainTitle}>Sambut Ramadan dengan <span className={styles.TitleSpan}>Kejutan Hadiah</span> menarik dari Eternity</h1> 
              </div>
              <div className={styles.mainRight}>
                <div className={styles.banner}>
                  <Image priority src="/images/lucky-draw.webp" alt='Lucky Draw Icon' width={1941} height={1000} layout='responsive' />
                </div>
                <p className={styles.bannerDescription}>Trading dan dapatkan hadiahnya!</p>
                <div className={styles.prize}>
                  <Image src="/images/hadiah.webp" alt='Prize Icon' width={2932} height={936} layout='responsive' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        
     
    </Layout>
  )
}
