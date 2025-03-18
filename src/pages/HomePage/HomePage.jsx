import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar"
import MostImportCompanyList from "../../components/MostImportCompanyList/MostImportCompanyList";
import PopularCategories from "../../components/PopularCategories/PopularCategories";

import styles from "./Homepage.module.css"

const HomePage = ()=>{
    return(
        <>
            <Header/>
            <SearchBar/>
            <MostImportCompanyList/>
            <PopularCategories/>
        </>
    )
}
export default HomePage;