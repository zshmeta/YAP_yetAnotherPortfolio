import Image from 'next/image'
import styles from './page.module.css'
import {PetitZshmeta} from "@/app/components/PetitZshmeta";
import { Particule } from "@/app/components/Particule";
import Snowflakes from "@/app/components/Snowflakes";
import Footer from "@/app/layouts/Footer";



// @react pragma use client

export default function Home() {
    const footerIcons = 'url(/zshmeta.jpg)'
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Le Z c'est Le S...</code>
        </p>
        <div style={{borderRadius: "45%", overflow:"hidden"}}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/zshmeta.jpg"
              alt="Le z c'est Le s"
              className={styles.topLogo}
              width={50}
              height={44}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
          <div className={styles.grid}>


          </div>
      </div>

        <Particule
        max-width="0.1rem"
        max-height="0.1rem"
        />
        <Snowflakes />
        <PetitZshmeta />
        <Footer icons={footerIcons}/>
    </main>
  )
}
