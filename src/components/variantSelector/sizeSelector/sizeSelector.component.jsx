import React from 'react';

import './sizeSelector.scss';

const SizeSelectorComponent = ({ sizesArr, acitveSeize, setAcitveSeize }) => {
    return (
        <div className='varientsSizeSelector'>
            <div className='title'>
                Sizes
            </div>
            <div className='sizes'>
                {
                    sizesArr.map( size => (
                        <button 
                            key={size}
                            className={[ size === acitveSeize ? 'active' : '' ].join(' ')}
                            aria-label={size}
                            onClick={ _ => setAcitveSeize(size)}
                            disabled={size === acitveSeize}
                        >
                            { size }
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default SizeSelectorComponent;
