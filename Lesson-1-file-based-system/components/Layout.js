import Link from "next/link"
import styles from '../styles/Home.module.css'

/* Menu Component here */
function Menu(){
    return(
        <ul>
            <Link  legacyBehavior href="/"><a>Home</a></Link>&nbsp;
            <Link legacyBehavior href="/contacts"><a>Contacts</a></Link>
        </ul>
    )
}

export default function Layout({children }) {
    return(
        <div className={styles.container}>
            {/* insert Menu here */}
            <Menu/>
            {children}
        </div>)
}