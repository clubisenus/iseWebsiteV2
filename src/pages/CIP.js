import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { CIP } from '../resources/images';
const mapStateToProps = state => {
    return {
        //state:state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const Home = (props) => (

    <div >
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id='main'>

            <div class="inner">
                <section>
                    <header class="main">
                        <h1>Community Involvement Projects</h1>
                    </header>

                    <span class="image main"><img src={CIP} alt="" /></span>
                    <hr class="major" />

                    <h2>QUEENSTOWN</h2>
                    <p>HUATZ</p>


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
        )(Home)
    )
)