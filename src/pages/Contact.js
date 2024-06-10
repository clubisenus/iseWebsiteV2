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
                    <hr className="major" />

                    <h2>You may reach out to us via</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '200px', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: "120px" }}>
                        {socials.map((social) => (
                            <div key={social.name} style={{ textAlign: 'center' }}>
                                <a href={social.link} target="_blank" rel="noopener noreferrer">
                                    <img src={social.icon} alt={social.name} style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
                                </a>
                                <h3>{social.name}</h3>
                                <p>{social.description}</p>
                            </div>
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
