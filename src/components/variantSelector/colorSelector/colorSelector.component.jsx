import React from 'react';

import './colorSelector.scss';

const ColorSelectorComponent = ({ colorsArr, acitveColor, setAcitveColor }) => {
    // console.log(acitveColor, colorsArr);

    return (
        <div className='varientsColorSelector'>
            <div className='title'>
                color
            </div>
            <div className='colors'>
                {
                    colorsArr.map( color => (
                        <button 
                            key={color}
                            className={[ color === acitveColor ? 'active' : '' ].join(' ')}
                            aria-label={color}
                            style={{ background: color}}
                            onClick={ _ => setAcitveColor(color)}
                            // disabled={color === acitveColor}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ColorSelectorComponent;
