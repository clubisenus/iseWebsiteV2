import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';
import TopBar from '../components/TopBar';
import LeftDrawer from '../components/LeftDrawer';
import { iseclublogobanner } from '../resources/images';
import { socials } from '../resources/socials'; // Import the socials array

const mapStateToProps = state => {
    return {
        //state:state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const Contact = (props) => (
    <div>
        <LeftDrawer display={props.display} />
        <TopBar />
        <div id='main'>
            <div className="inner">
                <section>
                    <header className="main">
                        <h1>Contact us</h1>
                    </header>
                    <span className="image main"><img src={iseclublogobanner} alt="" /></span>
                    <hr className="major" />

                    <h2>You may reach out to us via</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                        {socials.map((social) => (
                            <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                                <img src={social.icon} alt={social.name} style={{ width: '50px', height: '50px' }} />
                            </a>
                        ))}
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
            connect(mapStateToProps,
                mapDispatchToProps)
        )(Contact)
    )
);
