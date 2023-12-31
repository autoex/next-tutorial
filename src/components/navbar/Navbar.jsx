import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkModeToggle from '../darkMode/DarkModeToggle';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];
const Navbar = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link
          href='\'
          className={styles.logo}>
          NextJs
        </Link>
        <nav className={styles.navbar}>
          <DarkModeToggle />
          {links.map((link) => (
            <Link
              className={styles.link}
              key={link.id}
              href={link.url}>
              {link.title}
            </Link>
          ))}
          <button className={styles.logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
