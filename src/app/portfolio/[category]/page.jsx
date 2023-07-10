'use client';

import React from 'react';
import styles from './page.module.css';
import Button from '../../../components/button/Button';
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  return items[cat];
};

const Category = ({ params }) => {
  console.log(items[params.category]);
  const data = getData(params.category);

  if (!data) return notFound();

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((el) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{el.title}</h1>
            <p className={styles.desc}>
            {el.desc}
            </p>
            <Button children='See More' />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={el.image}
              alt=''
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
