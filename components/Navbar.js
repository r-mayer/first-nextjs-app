import styles from './Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return(
        <>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarWrapper}>
                    <a className={styles.menuLink} href="https://r-mayer.github.io/tractian-react-landing-page/"><li className={styles.navItem} name="site"><i class="fa-solid fa-up-right-from-square"></i></li></a>
                    <Link href="/"><li className={`${styles.navItem} ${styles.principal}`} name="HOME"><i class="fa-solid fa-house"></i></li></Link>
                    <a className={styles.menuLink} href="https://github.com/r-mayer"><li className={styles.navItem} name="github"><i class="fa-brands fa-github"></i></li></a>
                </ul>
            </div>    
        </>
    )
}

export default Navbar;