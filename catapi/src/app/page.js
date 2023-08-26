import styles from './page.module.css'
import HomeLayout from '@/components/Layout/Layout'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeLayout />
    </main>
  )
}
