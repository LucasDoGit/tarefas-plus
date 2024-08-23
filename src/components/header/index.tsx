import styles from './header.module.css'
import Link from 'next/link'

export function Header(){
    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href="/">
                        <h1 className={styles.logo}>
                            Tarefas<strong>+</strong>
                        </h1>
                    </Link>
                </nav>

                <button className={styles.loginButton}>Acessar</button>
            </section>
        </header>
    )
}