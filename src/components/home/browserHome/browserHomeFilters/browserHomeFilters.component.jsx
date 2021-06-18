import React from 'react';
import './browserHomeFilters.scss';

const BrowserHomeFiltersComponent = ({ dataArray, activeCollection, fn }) => {
    return (
        <div className='browserHomeFilters'>
            {
                dataArray.map(collection => 
                    <button 
                        onClick={_ => fn(collection.shopifyId)} 
                        key={collection.shopifyId}
                        className={[
                            'filter',
                            `${ activeCollection === collection.shopifyId ? 'active' : '' }`,
                        ].join(' ')}
                    >
                        {collection.title}
                    </button>)
            }
        </div>
    );
};

export default BrowserHomeFiltersComponent;
