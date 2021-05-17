import React from 'react';

import { connect } from 'react-redux';

const BrowserHome = ({ reduxData }) => {
    console.log(reduxData);

    return (
        <div>
            browser view
        </div>
    );
};

const mapStateToProps = state => ({
    reduxData: state
})

export default connect(mapStateToProps, null)(BrowserHome);
// export default BrowserHome;
