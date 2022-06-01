import styles from './Navbar.module.css'

function Navbar() {
    return(
        <>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarWrapper}>
                    <li className={styles.navItem} name="site"><i class="fa-solid fa-up-right-from-square"></i></li>
                    <li className={`${styles.navItem} ${styles.principal}`} name="HOME"><i class="fa-solid fa-house"></i></li>
                    <li className={styles.navItem} name="github"><i class="fa-brands fa-github"></i></li>
                </ul>
            </div>    
        </>
    )
}

export default Navbar;