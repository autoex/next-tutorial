import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const portfolioWorks = [
  {
    id: 1,
    url: '/portfolio/illustrations',
    img: '/illustration.png',
    desc: 'Illustrations',
  },
  { id: 2, url: '/portfolio/websites', img: '/websites.jpg', desc: 'Websites' },
  {
    id: 3,
    url: '/portfolio/application',
    img: '/apps.jpg',
    desc: 'Application',
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        {portfolioWorks.map((itm) => (
          <Link
            key={itm.id}
            href={itm.url}
            className={styles.item}>
              <Image fill src={itm.img} />
            <span className={styles.title}>{itm.desc}</span>
          </Link>
        ))}
       
      </div>
    </div>
  );
};

export default Portfolio;
