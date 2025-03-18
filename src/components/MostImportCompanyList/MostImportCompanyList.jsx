import styles from "./MostImportCompanyList.module.css";

import { DisneyLogo, FacebookLogo, MicrosoftLogo, SonyLogo, Coca_colaLogo } from "../../assets/companiesLogo"

const MostImportCompanyList = () => {
    return (
        <div className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <p className={styles.text}>Помогаем найти работу:</p>
                    <ul className={styles.list}>
                        <li><DisneyLogo /></li>
                        <li><FacebookLogo /></li>
                        <li><MicrosoftLogo /></li>
                        <li><SonyLogo /></li>
                        <li><Coca_colaLogo /></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default MostImportCompanyList;