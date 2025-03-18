import styles from "./PopularCategories.module.css";

import PopularCategoriesList from "./PopularCategoriesList/PopularCategoriesList";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularCategories =()=>{
    return(
        <section className={styles.section}>
            <div className="container">
                <SectionTitle title="Работа по категориям"/>
                <PopularCategoriesList/>
            </div>
        </section>
    )
}
export default PopularCategories;
