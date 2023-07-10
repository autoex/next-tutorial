import Navbar from '../components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/footer/Footer';
import {ThemeContextProvider} from '../context/ThemeContext'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextJs App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeContextProvider>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
