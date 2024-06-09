import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'
import { writeups } from '../resources/committees';

import { pic01, pic02, pic11, mc18banner, p18, vpi18, vpe18, gs18, fs18, isedpd18, ncpd18, slpdc18, slpdo18, wpd18, baccpdc18, baccpdt18} from '../resources/images';

const mapStateToProps = state => {
    return {
        //state:state
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
const MC18 = (props) => (
    <div>
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id="main">
            <div class="inner">
                <section>
                    <header class="main">
                        <h1>23rd Management Committee</h1>
                    </header>
                    <span class="image main"><img src={mc18banner} alt="" /></span>
                    <div>
                        {writeups.map((writeup) => (
                            <React.Fragment key={writeup.position}>
                                <hr className="major" />
                                <h2>{writeup.position}</h2> 
                                <p><p><span className={writeup.imageposition}><img src={writeup.image} alt="" /></span><br /><br /><br /><strong>{writeup.name}</strong> {writeup.text}<br /></p></p>  
                            </React.Fragment>
                        ))}
                    </div>
                    
					
                    
                </section>
            </div>
        </div>
    </div>
)
export default withRouter(
    withTheme(
        compose(
            connect(mapStateToProps,
                mapDispatchToProps)
        )(MC18)
    )
)