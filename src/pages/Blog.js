import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'
import pageLinks from '../resources/pageLinks'
import { iseclublogobanner2, ISENC2019 } from '../resources/images';
const mapStateToProps = state => {
    return {
        //state:state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const Blog = (props) => (

    <div >
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id='main'>
            <div class="inner">
                <section>
                    <header class="main">
                        <h1>Blog</h1>
                    </header>
                    <div id="iseday">
                        <h2>ISE Day 2019</h2>
                        <small> Sept 2019 </small>
                        <span class="image main"><img src={iseclublogobanner2} alt="" /></span>
                        <p>Come on down for talks and food! More info <a href={pageLinks.events.day}>here</a>. Sign up link can be found here.</p>
                        <hr class="major" />
                    </div>
                    <div id="NC">
                        <h2>ISE Night Cycling 2019</h2>
                        <small> Sept 2019 </small>
                        <span class="image main"><img src={ISENC2019} style={{maxWidth: '40%' }} alt="" /></span>
                        <p>ISE Night Cycling 2019 is here! Find out more <a href={pageLinks.events.cycling}>here</a>. Limited slots, sign up now!</p>
                        <hr class="major" />
                    </div>
                    <div id="shop">
                        <h2>ISE Shirt Sales have started!</h2>
                        <small> Sept 2019 </small>
                        <span class="image main"><img src={iseclublogobanner2} alt="" /></span>
                        <p>Shop now <a href={pageLinks.internal.shop}>here</a></p>
                        <hr class="major" />
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
        )(Blog)
    )
)