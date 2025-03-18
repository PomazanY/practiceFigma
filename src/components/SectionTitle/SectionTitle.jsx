import styles from "./SectionTitle.module.css";

const SectionTitle =({title, subtitle})=>{
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      
    )
}
export default SectionTitle;