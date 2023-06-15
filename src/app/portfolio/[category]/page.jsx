import React from 'react'
import styles from './page.module.css'
import Button from '../../../components/button/Button'
import Image from 'next/image'

const Category = ({params}) => {
 
  return (
    <div className={styles.container}>
    <h1 className={styles.catTitle}>{params.category}</h1>

   
    <div className={styles.item} >
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ipsam.</p>
          <Button children="See More"  />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src='/apps.jpg'
            alt=""
          />
        </div>
      </div> <div className={styles.item} >
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ipsam.</p>
          <Button children="See More"  />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src='/apps.jpg'
            alt=""
          />
        </div>
      </div> <div className={styles.item} >
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ipsam.</p>
          <Button children="See More"  />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src='/apps.jpg'
            alt=""
          />
        </div>
      </div>
   
  </div>

  )
}

export default Category