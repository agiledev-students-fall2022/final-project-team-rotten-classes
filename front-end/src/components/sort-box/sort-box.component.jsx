import './sort-box.styles.css'

const SortBox = () => {
    return (
        <div className='sort-box'>
            <span className='sort-text-span'>Sort: </span>
            <form>
                <div>
                    <span className='sort-text-span'>None </span>
                    <input type='radio' name='sort-preference'/>
                </div>
                <div>
                    <span className='sort-text-span'>Popularity </span>
                    <input type='radio' name='sort-preference'/>
                </div>
                <div>
                    <span className='sort-text-span'>Rating </span>
                    <input type='radio' name='sort-preference'/>
                </div>
                <div>
                    <span className='sort-text-span'>Workload </span>
                    <input type='radio' name='sort-preference'/>
                </div>
                <div>
                    <span className='sort-text-span'>Difficulty </span>
                    <input type='radio' name='sort-preference'/>
                </div>
            </form>
        </div>
    );
};


export default SortBox;