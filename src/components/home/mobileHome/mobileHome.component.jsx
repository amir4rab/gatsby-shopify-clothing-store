import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CardSliderComponent from '../../cardSlider/cardSlider.component';
import MobileShortcutBarComponent from '../../shortcutBar/mobileShortcutBar/mobileShortcutBar.component';

import * as classes from './mobileHome.module.scss';


const MobileHome = () => {
    const query = useStaticQuery(graphql`
        query getColletionsForMobileHomeComponent {
            allShopifyCollection {
                nodes {
                    title
                    image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);

    console.log(query);

    return (
        <div className={ classes.mobileHome }>
            <MobileShortcutBarComponent />
            <div>
                <CardSliderComponent dataArr={query.allShopifyCollection.nodes} />
            </div>
        </div>
    );
};

export default MobileHome;
