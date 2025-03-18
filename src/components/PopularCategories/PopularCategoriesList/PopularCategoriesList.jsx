import styles from "./PopularCategoriesList.module.css";

import items from "./items"

const PopularCategoriesList = () => {
    const elements = items.map(item => {
        <li key={item.name}>
            <a href={item.href}>
                {item.icon}
                <p>{item.name}</p>
            </a>
        </li>
    });
    return (
        <ul>
            {elements}
        </ul>
    )
}
export default PopularCategoriesList;