import SearchBox from "../../components/search-box/search-box.component";
import './search-page.styles.scss';

const searchPage = () => {
    return(
        <div>
            <SearchBox
                placeholder='Search...'
                className={'search-box'}
            />
        </div>
    )
}

export default searchPage