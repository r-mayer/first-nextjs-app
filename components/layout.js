import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './Navbar';

const name = 'TRACTIAN BLOG';
export const siteTitle = 'TRACTIAN BLOG - Um teste de site'


export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="First Nextjs App - Tractian" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <div className={styles.headingContainer}>
                            <img src='/images/bg-form.png' alt='bg' className={styles.bgImageHome}/>
                            <div className={styles.logo_wrapper}>
                                <Image
                                    priority
                                    src="/images/logo.svg"
                                    className={utilStyles.logo}
                                    height={140}
                                    width={140}
                                    alt={name}
                                />
                            </div>
                        </div>                      
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <div className={styles.headingContainer}>
                            <img src='/images/bg-stats-img.png' alt='bg' className={styles.bgImagePost}/>
                            <div className={styles.logo_wrapper}>
                                <Image
                                priority
                                src="/images/logo.svg"
                                className={utilStyles.logo}
                                height={108}
                                width={108}
                                alt={name}
                                />
                            </div>
                        </div>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>

            <main>{children}</main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                    <a>← Back to home</a>
                    </Link>
              </div>
            )}
        </div>
    )
}