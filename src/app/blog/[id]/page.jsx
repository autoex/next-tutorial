import Image from 'next/image';
import React from 'react';
import styles from './page.module.css'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className={styles.author}>
            <Image
              src='/apps.jpg'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Ivan Drago</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='/apps.jpg'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quos, tenetur nihil aspernatur facilis sint? Ratione repellat voluptas dolorum quas, esse commodi autem enim excepturi, veritatis pariatur, cum veniam voluptate!</p>
      </div>
    </div>
  );
};

export default BlogPost;
