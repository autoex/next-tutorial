import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const socials = [
  { id: 1, name: 'Facebook', url: '/1.png' },
  { id: 2, name: 'Instagram', url: '/2.png' },
  { id: 3, name: 'Twitter', url: '/3.png' },
  { id: 4, name: 'Youtube', url: '/4.png' },
];
const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div>&copy;{new Date().getFullYear()}. All rights reserved</div>
        <div className={styles.socials}>
          {socials.map((itm) => (
            <Link
              key={itm.id}
              href='#'>
              <Image
                className={styles.icon}
                src={itm.url}
                alt={itm.name}
                height={15}
                width={15}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
