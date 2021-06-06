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
const Sponsorship = (props) => (

    <div >
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id='main'>
            <div class="inner">
                <section>
                    <header class="main">
                        <h1>Sponsorships</h1>
                    </header>

                    <span class="image main"><img src={iseclublogobanner} alt="" /></span>
                    <hr class="major" />

                    <h2>Looking to reach out to ... </h2>
                    <p>You may refer to our Sponsorship Booklet here.</p>


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
        )(Sponsorship)
    )
)