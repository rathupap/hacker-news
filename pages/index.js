import { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from'next/link';
import ErrorPage from './_error';
import StoryList from './../components/StoryList';
import Layout from './../components/Layout';
import Head from 'next/head';

const Home = ({ stories, page }) => {

  if(stories.length === 0){
    return <ErrorPage />
  }

  useEffect(() => {
    if("serviceWorker" in navigator){
      navigator.serviceWorker.register("/service-worker.js").then((registration) => {
        console.log("service worker registration successful", registration)
      }).catch((err) => {
        console.warn("service worker registration failed", err)
      })

    }
  }, [])
  
  return(
    <Layout title="Hacker News">
      <img src="/static/indulger-192x192.png" alt=""/>
      <Head>
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Indulger" />
        <meta name="apple-mobile-web-app-title" content="Indulger" />
        <meta name="theme-color" content="#f60f60" />
        <meta name="msapplication-navbutton-color" content="#f60f60" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/png" sizes="192X192" href="/static/indulger-192x192.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="192X192" href="/static/indulger-192x192.png" />
        <link rel="icon" type="image/png" sizes="512X512" href="/static/indulger-512x512.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="512X512" href="/static/indulger-512x512.png" />
      </Head>
      {
        stories.map((story) => {
          return <StoryList key={story.id} story={story} />
        })
      }
      <Link as="/" href={`/?page=${page + 1}`}><a>Next Page</a></Link>
    </Layout>
  )

}

Home.getInitialProps = async ({ query }) => {
  let page;
  try{
    page = parseInt(query.page, 10) || 1;
    const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
    const stories = await response.json();

    return { page, stories }

  }

  catch(err){
    return { stories: [] }
  }
  
}

export default Home;