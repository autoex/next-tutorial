'use client';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useSession, signIn, signOut } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();

  console.log(session);

  const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher,
  );
  console.log(error);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>{data && data.map((el) => <p key={el.id}>{el.title}</p>)}</div>;
};

export default Dashboard;
