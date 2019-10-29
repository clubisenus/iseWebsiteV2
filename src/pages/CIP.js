import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { CIP, CIP_Poster } from '../resources/images';
import pageLinks from '../resources/pageLinks';
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
                <LeftDrawer />
                <TopBar />
                <div id='main'>

                    <div class="inner">
                        <section>
                            <header class="main">
                                <h1>Community Involvement Projects</h1>
                            </header>

                            <span class="image main"><img src={CIP_Poster} alt="" 
                            style = {{height : "512px",width:"auto"}}
                            /></span>
                            <hr class="major" />

                            <h2>ISE CIP 2020</h2>
                            <p>
                            {"Looking for ways to give back to the community? ISE Club is back with another volunteering opportunity for you! \n "}
                            {"Join us for a day of shopping with the elderly at Queenstown. Together we can put a smile on their faces!😌\n"}
                            {"Date: 11 January 2020\n"}
                            {"Time: 8am-12.30pm\n"}
                            {"Location: Anchor Point\n"}
                            {"What are you waiting for? Grab your friends and sign up "}
                            <a href={pageLinks.signUps.welfare}>HERE!</a>
                            </p>

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