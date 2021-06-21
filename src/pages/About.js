import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { iseclublogobanner } from '../resources/images';

const mapStateToProps = state => {
    return {
        //state:state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const About = (props) => (

    <div >
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id="main">
            <div class="inner">
                <section>
                    <header class="main">
                        <h1>About Us</h1>
                    </header>

                    <span class="image main"><img src={iseclublogobanner} alt="" /></span>
                    <hr class="major" />

                    <h2>NUS ISE Club</h2>
                    <p>NUS Industrial and Systems Engineering (ISE) Club of National University of Singapore is an affiliated club of the NUS Students’ Engineering Club and is the official club that represents the undergraduate body of Industrial and Systems Engineering.</p>
                    <p>It is a student run organisation that seeks to improve the student life and welfare of every undergraduate student in the Department. </p>
                    <p>Founded in 2002, ISE Club aims to instil a sense of belonging within the ISE community through various events held throughout each academic year focusing on both the welfare and academic aspect of the undergraduate community. </p>
                    <p>The club is currently managed by the 18th Management Committee.</p>


                    <hr class="major" />

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
        )(About)
    )
)