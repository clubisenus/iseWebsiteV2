import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import LeftDrawer from '../components/LeftDrawer';

import { foc } from '../resources/events';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the styles
import placeholderImage from '../resources/images/pic06.jpg'; // Import the placeholder image

const mapStateToProps = state => {
    return {
        //state:state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const ISEFOC = (props) => (
    <div>
        <LeftDrawer display={props.display} />
        <TopBar />
        <div id='main'>
            <div className="inner">
                <section>
                    <header className="main">
                        <h1>{foc.name}</h1>
                    </header>

                    <Slide easing="ease">
                        {(foc.images.length > 0 ? foc.images : [placeholderImage]).map((image, index) => (
                            <div className="each-slide" key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={image} alt={`Slide ${index}`} style={{ width: '80%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} />
                            </div>
                        ))}
                    </Slide>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', marginTop: '150px' }}>
                        <h3>{foc.description}</h3>
                    </div>
                    <hr className="major" />
                </section>
            </div>
        </div>
    </div>
);

export default withRouter(
    withTheme(
        compose(
            connect(mapStateToProps, mapDispatchToProps)
        )(ISEFOC)
    )
);
