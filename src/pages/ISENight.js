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
const CareerTalk = (props) => (
    <div >
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id='main'>
            <div class="inner">
                <section>
                    <header class="main">
                        <h1>ISE Night</h1>
                    </header>

                    <span class="image main"><img src={iseclublogobanner} alt="" /></span>
                    <hr class="major" />

                    <h2>What is ISE Night? </h2>
                    <p>IDK</p>
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
        )(CareerTalk)
    )
)