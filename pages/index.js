import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Este é meu primeiro app criado utilizando o framework NextJs.</p>
        <p>Trata-se de um simples Blog com design baseado nesta <a href="https://r-mayer.github.io/tractian-react-landing-page/">landing page</a> criada por mim.</p>
      </section>
    </Layout>
  )
}
