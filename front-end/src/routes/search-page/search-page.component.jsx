import SearchBox from "../../components/search-box/search-box.component";
import './search-page.styles.scss';
import { Button } from 'react-bootstrap';
import React from "react";


const searchPage = () => {
    return(
        <div>
            <span ><Button>FILTER</Button></span>
            <span ><Button>SORT</Button></span>
            <SearchBox placeholder='Search...' className={'search-box'}/>
        </div>
    )
}

export default searchPage