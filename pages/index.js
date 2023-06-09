import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script';
import Link from 'next/link';
import Dummy from './dummy';
import Nav from './nav';
import Course from './courses';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (

    <>
       {/*  <Dummy/> */}
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next appsss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/*  <Script src='/testing.js' strategy='lazyOnLoad'></Script> */}
      <main className={styles.main}>
        
      

        <div className={styles.center}>
         <h1 className=' myspan '>Your Choice Name</h1>
        </div>
      
      <img src={'/img1.avif'} width={600} height={400} />
        <div className={ [styles.grid , styles.center]}>
         <Course/>
        </div>
      </main>
    </>
  )
}
