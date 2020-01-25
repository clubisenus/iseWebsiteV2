import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { Welfare_Poster } from '../resources/images';
import pageLinks from '../resources/pageLinks';
const mapStateToProps = state => {
    return {
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
                                <h1>Welfare Giveaways</h1>
                            </header>

                            <span class="image main"><img src={Welfare_Poster} alt="" 
                            style = {{height : "512px",width:"auto"}}
                            /></span>
                            <hr class="major" />

                            <h2>GIMME GIMME GIMME!</h2>
                            <p>
                            {"Hey guys!! We will be having a welfare pack giveaway next Tuesday (5th Nov) between 2-5pm. \n "}
                            {"Come on down to the benches outside LT6 to collect your welfare pack!🍭🍪🍫🍬 \n"}
                            {"Please indicate your interest in the link below and come in your ISE shirts. See you there!\n"}
                            {"Sign up "}
                            <a href={pageLinks.signUps.welfare}>here</a>
                            {" to redeem your welfare pack!!"}
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