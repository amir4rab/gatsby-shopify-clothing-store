import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import slugHelper from '../../utilities/functions/slugHelper';

import * as classes from './cardSlider.module.scss';

const CardSliderComponent = ({ dataArr }) => {
    return (
        <div className={ classes.cardSlider }>
            <div 
                className={ classes.inner }
                // style={{
                //     minWidth: `calc(55vw * ${dataArr.length})`,
                //     minheight: `auto`,
                // }}
            >
                <div className={ classes.padding }/>
                <div className={ classes.items }>
                    { dataArr.map( item => (
                        <div className={ classes.cardItem } key={slugHelper.makeSlug(item.title)}>
                            <div className={ classes.image }>
                                <GatsbyImage image={item.image.localFile.childImageSharp.gatsbyImageData} alt={item.title} />
                            </div>
                            <div className={ classes.title }>
                                <Link to={`/${slugHelper.makeSlug(item.title)}/`} >
                                    { item.title }
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={ classes.padding }>
                    <div>
                        text
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSliderComponent;
