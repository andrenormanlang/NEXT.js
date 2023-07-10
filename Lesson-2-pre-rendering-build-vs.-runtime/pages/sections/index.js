import Head from 'next/head'
import Link from 'next/link'
import Layout from "../../components/Layout"
import { handler } from "../api";

function Sections({ results, title }) {
  // Render post...
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <h1>{title}</h1>
          <ul>
            {results?.map(result => {
              return (
                <>
                  <Link href={`sections/${result.section}`}>{result.display_name}</Link><br />
                </>
              )
            })}
          </ul>
        </main>
    </Layout>);
}


// to register for a new New York Times API KEY, visit : 
const API_KEY = "dOVYbY1gxTk6Z1brGAi2nbEs07HSr8Xn"
// This also gets called at build time
export async function getStaticProps({ params }) {
      return {
        props: {
          results : await handler(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=
          ${API_KEY}`), 
          title: "Sections"
        }
      
    
  }
}

export default Sections;
