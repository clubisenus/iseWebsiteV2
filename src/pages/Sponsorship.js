import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import LeftDrawer from '../components/LeftDrawer';

import { iseclublogobanner } from '../resources/images';
import { sponsorships } from '../resources/sponsorships';

const mapStateToProps = state => {
    return {
        //state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const Sponsorship = (props) => {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px'
    };

    const itemStyle = {
        margin: '100px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const logoStyle = {
        width: '250px', // Default size for logos
        height: '250px', // Default size for logos
        objectFit: 'contain' // Ensure the logo maintains aspect ratio and fits within the specified dimensions,
    };

    const bigLogoStyle = {
        width: '1000px', // Bigger size for specific logos
        height: '1000px', // Bigger size for specific logos
        objectFit: 'contain', // Ensure the logo maintains aspect ratio and fits within the specified dimensions,
        marginBottom: '-300px', // Adjust the distance between the logo and the name
        marginTop: '-400px' // Adjust the distance between the logo and the title
    };

    const nameStyle = {
        marginTop: '10px',
        fontSize: '1.5em',
        textAlign: 'center'
    };

    const bigNameStyle = {
        marginTop: '0px',
        fontSize: '2em',
        textAlign: 'center'
    };

    return (
        <div>
            <LeftDrawer display={props.display} />
            <TopBar />
            <div id='main'>
                <div className="inner">
                    <section>
                        <header className="main">
                            <h1>Sponsorships</h1>
                        </header>
                        
                        <h2>Past Sponsors: </h2>
                        <div style={containerStyle}>
                            <div style={rowStyle}>
                                {sponsorships.slice(0, 1).map((sponsorship) => (
                                    <div style={itemStyle} key={sponsorship.name}>
                                        <img 
                                            style={sponsorship.name === 'Micron' ? bigLogoStyle : logoStyle} 
                                            src={sponsorship.logo} 
                                            alt={sponsorship.name} 
                                        />
                                        <div style={sponsorship.name === 'Micron' ? bigNameStyle : nameStyle}>
                                            {sponsorship.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={rowStyle}>
                                {sponsorships.slice(1, 3).map((sponsorship) => (
                                    <div style={itemStyle} key={sponsorship.name}>
                                        <img 
                                            style={sponsorship.name === 'Micron' ? bigLogoStyle : logoStyle} 
                                            src={sponsorship.logo} 
                                            alt={sponsorship.name} 
                                        />
                                        <div style={sponsorship.name === 'Micron' ? bigNameStyle : nameStyle}>
                                            {sponsorship.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={rowStyle}>
                                {sponsorships.slice(3, 6).map((sponsorship) => (
                                    <div style={itemStyle} key={sponsorship.name}>
                                        <img 
                                            style={sponsorship.name === 'Micron' ? bigLogoStyle : logoStyle} 
                                            src={sponsorship.logo} 
                                            alt={sponsorship.name} 
                                        />
                                        <div style={sponsorship.name === 'Micron' ? bigNameStyle : nameStyle}>
                                            {sponsorship.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <hr className="major" />

                    </section>
                </div>
            </div>
        </div>
    );
};

export default withRouter(
    withTheme(
        compose(
            connect(mapStateToProps, mapDispatchToProps)
        )(Sponsorship)
    )
);
