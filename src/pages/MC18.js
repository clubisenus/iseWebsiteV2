import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import LeftDrawer from '../components/LeftDrawer';
import { writeups } from '../resources/committees';
import committee from '../resources/images/committee.JPG'

import {
  pic01, pic02, pic11, mc18banner, p18, vpi18, vpe18, gs18, fs18,
  isedpd18, ncpd18, slpdc18, slpdo18, wpd18, baccpdc18, baccpdt18
} from '../resources/images';

const mapStateToProps = state => {
  return {
    //state:state
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const standardizedImageStyle = {
  width: '200px', // Adjust to desired width
  height: '250px', // Adjust to desired height
  objectFit: 'cover', // Ensures the aspect ratio is maintained
  borderRadius: '8px', // Optional: adds rounded corners
  margin: '10px' // Optional: adds space around images
};

const MC18 = (props) => (
  <div>
    <LeftDrawer display={props.display} />
    <TopBar />
    <div id="main">
      <div className="inner">
        <section>
          <header className="main">
            <h1>23rd Management Committee</h1>
          </header>
          <span className="image main"><img src={committee} alt="" /></span>
          <div>
            {writeups.map((writeup) => (
              <React.Fragment key={writeup.position}>
                <hr className="major" />
                <h2>{writeup.position}</h2> 
                <p>
                  <span className={writeup.imageposition}>
                    <img 
                      src={writeup.image} 
                      alt="" 
                      style={standardizedImageStyle}
                    />
                  </span>
                  <br /><br /><br />
                  <strong>{writeup.name}</strong> {writeup.text}
                  <br />
                </p>  
                <br/><br/>
              </React.Fragment>             
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default withRouter(
  withTheme(
    compose(
      connect(mapStateToProps, mapDispatchToProps)
    )(MC18)
  )
);
