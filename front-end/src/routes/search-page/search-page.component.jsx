import SearchBox from "../../components/search-box/search-box.component";
import './search-page.styles.scss';
import React from "react";
import SortBox from "../../components/sort-box/sort-box.component";
import FilterBox from "../../components/filter-box/filter-box.component";

const searchPage = () => {
    return(
        <div className='search-container'>
            <div className>
                <SearchBox placeholder='Search...' className={'search-box'}/>
            </div>
            <div className='sort-filter-container'>
                    <SortBox className={'sort-box'}/>
                    <FilterBox className={'filter-box'}/>
            </div>
        </div>
    )
}

export default searchPage