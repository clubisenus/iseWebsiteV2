import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { BACCbanner } from '../resources/images';
const mapStateToProps = state => {
    return {
        //state:state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
class Page extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (

            <div >
                <LeftDrawer />
                <TopBar />
                <div id='main'>
                    <div class="inner">
                        <section>
                            <header class="main">
                                <h1>NUS ISE BACC</h1>
                            </header>

                            <span class="image main"><img src={BACCbanner} alt="" /></span>
                            <hr class="major" />

                            <h2>Micron NUS ISE Business Analytics Case Competition 2020 </h2>
                            <p>The NUS ISE Business Analytics Case Competition is back!</p>


                            <hr class="major" />

                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(
    withTheme(
        compose(
            connect(mapStateToProps,
                mapDispatchToProps)
        )(Page)
    )
)