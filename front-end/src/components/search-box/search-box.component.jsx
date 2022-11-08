import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return (
        <div className="search-box">
            <form className={"search-box-form"}>
                <div className={"search-box-input-group"}>
                    <select name="search-preference" className="search-box-dropdown">
                        <option value="course-id">Course ID</option>
                        <option value="course-name">Course Name</option>
                        <option value="professor">Professor</option>
                    </select>
                    <input
                        className={"search-box-input"}
                        type='search'
                        placeholder={placeholder}
                        onChange={onChangeHandler}
                    />
                </div>
                <button className={"search-box-submit"}>submit</button>
            </form>
        </div>
    )
};


export default SearchBox;