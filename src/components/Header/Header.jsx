import styles from "./Header.module.css";

import { menuItems } from "./menuItems.js"

const Header = () => {
    const elements = menuItems.map(item =>
        <li key={item.text}><a className={styles.menu_link} href={item.href}>{item.text}</a></li>
    )
    return (

        <nav className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <a className={styles.logo} href="/">Cooljob</a>
                    <ul className={styles.menu}>
                        {elements}
                    </ul>
                    <div className={styles.auth_buttons}>
                        <a className={styles.register_btn} href="/register">Регистрация</a>
                        <button type="button" className={styles.login_btn}>Вход</button>
                    </div>
                </div>

            </div>
        </nav>


    )
}
export default Header;