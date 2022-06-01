import Navbar from '../components/Navbar';
import '../styles/global.css';

export default function App({ Component, pageProps}) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}