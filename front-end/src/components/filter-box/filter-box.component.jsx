import './filter-box.styles.css'

const FilterBox = () => {
    return (
        <div className='filter-box'>
            <span className='filter-text-span'>Filter: </span>
            <form>
                <div>
                    <span className='filter-text-span'>None </span>
                    <input type='radio' name='filter-preference'/>
                </div>
                <div>
                    <span className='filter-text-span'>Computer Science </span>
                    <input type='radio' name='filter-preference'/>
                </div>
                <div>
                    <span className='filter-text-span'>Biology </span>
                    <input type='radio' name='filter-preference'/>
                </div>
                <div>
                    <span className='filter-text-span'>Global Health </span>
                    <input type='radio' name='filter-preference'/>
                </div>
                <div>
                    <span className='filter-text-span'>Mathematics </span>
                    <input type='radio' name='filter-preference'/>
                </div>
            </form>
        </div>
    );
};

export default FilterBox