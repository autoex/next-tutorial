import React from 'react'
import Hero from 'public/hero.png'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Button from '../components/button/Button'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your mobile products</h1>
        <p className={styles.description}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link href='\portfolio'><Button>See our works</Button></Link>
      </div>
      <div className={styles.item}><Image className={styles.img} src={Hero} /></div>
    </div>
  )
}

export default Home