import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

//import { iseclublogobanner } from '../resources/images';
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
    constructor(props) {
        super(props);
        //this.state = {date: new Date()};
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (

            <div >
                <LeftDrawer/>
                <TopBar />
                <div id='main'>
                    <div class="inner">
                        <section>

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