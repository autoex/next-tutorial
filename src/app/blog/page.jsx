import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
 
  return (
    <div className={styles.mainContainer}>
     {data.map(itm=>(
       <Link key={itm.id}
       href={`/blog/${itm.id}`}
       className={styles.container}>
       <div className={styles.imageContainer}>
         <Image
           src='/apps.jpg'
           alt=''
           width={400}
           height={250}
           className={styles.image}
         />
       </div>
       <div className={styles.content}>
         <h1 className={styles.title}>{itm.title}</h1>
         <p className={styles.desc}>
           {itm.body}
         </p>
       </div>
     </Link>
     ))}
     
    </div>
  );
};

export default Blog;
