import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import LeftDrawer from '../components/LeftDrawer';
import { writeups } from '../resources/committees';
import committee from '../resources/images/committee.jpg';

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

const styles = {
  standardizedImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '8px',
    margin: '10px 0',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    textAlign: 'center',
  },
  writeup: {
    width: '100%',
    maxWidth: '100%', 
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
  },
  mediaQueries: `
    @media (max-width: 768px) {
      .main {
        padding: 10px;
      }
      
      .image.main img {
        width: 100%;
        height: auto;
      }
      
      h1 {
        font-size: 1.5em;
      }
      
      h2 {
        font-size: 1.2em;
      }
      
      p {
        font-size: 1em;
        text-align: center;
      }
      
      hr.major {
        margin: 20px 0;
      }
    }
    
    @media (min-width: 769px) {
      h1 {
        font-size: 2em; // Adjust font size for desktop
      }
      
      h2 {
        font-size: 1.5em; // Adjust font size for desktop
      }
      
      p {
        font-size: 1.2em; // Adjust font size for desktop
        text-align: left; // Optional: align text to left for readability
      }
      
      hr.major {
        margin: 30px 0;
      }
    }
  `,
};

const MC18 = (props) => (
  <div>
    <style>{styles.mediaQueries}</style>
    <LeftDrawer display={props.display} />
    <TopBar />
    <div id="main" style={{ width: '100%' }}>
      <div className="inner">
        <section>
          <header className="main" style={styles.header}>
            <h1>23rd Management Committee</h1>
          </header>
          <span className="image main"><img src={committee} alt="" style={styles.mainImage} /></span>
          <div style={styles.container}>
            {writeups.map((writeup) => (
              <div key={writeup.position} style={styles.writeup}>
                <hr className="major" />
                <h2>{writeup.position}</h2>
                <p>
                  <span className={writeup.imageposition}>
                    <img 
                      src={writeup.image} 
                      alt="" 
                      style={styles.standardizedImage}
                    />
                  </span>
                  <strong>{writeup.name}</strong> {writeup.text}
                </p>
              </div>
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
