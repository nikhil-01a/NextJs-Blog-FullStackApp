import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';


export async function getStaticProps() {
  //Getting from file system: lib/posts
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };

  // Fetch from API
  // const res = await fetch('..');
  // return res.json();

  //query the database
  //return databaseClient.query('SELECT posts...')


}


export default function Home({allPostsData}) {
  return(
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Nikhil</p>
        <p>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map( ({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br/>
                {id}
                <br/>
                {date}
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  );
}
