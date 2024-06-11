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
        objectFit: 'contain' // Ensure the logo maintains aspect ratio and fits within the specified dimensions
    };

    const bigLogoStyle = {
        width: '1000px', // Bigger size for specific logos
        height: '1000px', // Bigger size for specific logos
        objectFit: 'contain', // Ensure the logo maintains aspect ratio and fits within the specified dimensions
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

    const mediaQueries = `
        @media (max-width: 600px) {
            .row {
                flex-direction: column !important;
                align-items: center;
            }
            .item {
                margin: 10px 0 !important;
            }
            .name {
                font-size: 1.2em;
            }
            .bigName {
                font-size: 1.5em;
            }
            .bigLogo {
                max-width: 250px;
                height: 250px;
                margin-bottom: 0;
                margin-top: 0;
            }
        }
    `;

    return (
        <div>
            <style>{mediaQueries}</style>
            <LeftDrawer display={props.display} />
            <TopBar />
            <div id='main'>
                <div className="inner container">
                    <section>
                        <header className="main">
                            <h1>Sponsorships</h1>
                        </header>
                        
                        <h2>Past Sponsors: </h2>
                        <div style={containerStyle}>
                            <div style={rowStyle} className="row">
                                {sponsorships.slice(0, 1).map((sponsorship) => (
                                    <div style={itemStyle} key={sponsorship.name} className="item">
                                        <img 
                                            style={sponsorship.name === 'Micron' ? bigLogoStyle : logoStyle} 
                                            src={sponsorship.logo} 
                                            alt={sponsorship.name} 
                                            className={sponsorship.name === 'Micron' ? 'bigLogo' : ''}
                                        />
                                        <div style={sponsorship.name === 'Micron' ? bigNameStyle : nameStyle} className={sponsorship.name === 'Micron' ? 'bigName' : 'name'}>
                                            {sponsorship.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={rowStyle} className="row">
                                {sponsorships.slice(1, 3).map((sponsorship) => (
                                    <div style={itemStyle} key={sponsorship.name} className="item">
                                        <img 
                                            style={sponsorship.name === 'Micron' ? bigLogoStyle : logoStyle} 
                                            src={sponsorship.logo} 
                                            alt={sponsorship.name} 
                                            className={sponsorship.name === 'Micron' ? 'bigLogo' : ''}
                                        />
                                        <div style={sponsorship.name === 'Micron' ? bigNameStyle : nameStyle} className={sponsorship.name === 'Micron' ? 'bigName' : 'name'}>
                                            {sponsorship.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={rowStyle} className="row">
                                {sponsorships.slice(3, 6).map((sponsorship) => (
                                    <div style={itemStyle} key={sponsorship.name} className="item">
                                        <img 
                                            style={sponsorship.name === 'Micron' ? bigLogoStyle : logoStyle} 
                                            src={sponsorship.logo} 
                                            alt={sponsorship.name} 
                                            className={sponsorship.name === 'Micron' ? 'bigLogo' : ''}
                                        />
                                        <div style={sponsorship.name === 'Micron' ? bigNameStyle : nameStyle} className={sponsorship.name === 'Micron' ? 'bigName' : 'name'}>
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
