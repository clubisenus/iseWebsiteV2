import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'
import Article from '../components/Article'

import { iseclublogobanner, ISEDayPoster, ISENight, ISENC2019, pic04, CIP, pic06, BACC, Welfare_Poster, CIP_Poster } from '../resources/images';
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
                                <h1>Upcoming Events</h1>
                            </header>
                            <div class="posts">
                                {[
                                    {
                                        image: ISEDayPoster
                                        , pageLink: pageLinks.events.day
                                        , title: "ISE Day 2019"
                                        , body: "We're back again with this year's instalment of ISE Day! You know the drill: free buffet food and giveaways :) We will be selling ISE shirts too! Additionally, there will be department/SEP/Micron Internships & System Design Projects talks as well. Sign up now (so we know to cater more food)!"
                                        , buttonLink: pageLinks.signUps.day
                                        , buttonText: "Sign Up"
                                        , display: false
                                    }, {
                                        image: ISENight
                                        , pageLink: pageLinks.events.night
                                        , title: "ISE Night is back!"
                                        , body: "This year's instalment of ISE Night ups the game... by 20 floors to be exact. Right in the middle of Singapore's business district, 360 Lounge is a modern oasis with an amazing view, tucked away on the 20th floor of Oxley Tower. Sign up now, and we'll see you there!"
                                        , buttonLink: pageLinks.signUps.night
                                        , buttonText: "Sign Up"
                                        , display: false
                                    }, {
                                        image: ISENC2019
                                        , pageLink: pageLinks.events.cycling
                                        , title: "ISE Night Cycling"
                                        , body: "The annual ISE Night Cycling event is a long time favourite of ours! A night of fun, cycling, and laughter :) Join us in welcoming the freshman into the ISE family this year. An annual event definitely not to be missed! Limited edition Night Cycling shirt + drawstring bag (filled w goodies) for every participant! Sign up now!"
                                        , buttonLink: pageLinks.signUps.cycling
                                        , buttonText: "Sign Up"
                                        , display: false
                                    }, {
                                        image: Welfare_Poster
                                        , pageLink: pageLinks.events.welfare
                                        , title: "Welfare Giveaways"
                                        , body: "Hey guys!! We will be having a welfare pack giveaway next Tuesday (5th Nov) between 2-5pm. Come on down to the benches outside LT6 to collect your welfare pack!🍭🍪🍫🍬 Please indicate your interest in the link below and come in your ISE shirts. See you there!"
                                        , buttonLink: pageLinks.signUps.welfare
                                        , buttonText: "Sign Up"
                                        , display: false
                                    }, {
                                        image: CIP_Poster
                                        , pageLink: pageLinks.events.cip
                                        , title: "Community Involvement Projects"
                                        , body: "Looking for ways to give back to the community? ISE Club is back with another volunteering opportunity for you! Join us for a day of shopping with the elderly at Queenstown. Together we can put a smile on their faces! 😌 \n Date: 11 January 2020 \n Time: 8am-12.30pm \n Location: Anchor Point\n What are you waiting for? Grab your friends and sign up now!"
                                        , buttonLink: pageLinks.signUps.cip
                                        , buttonText: "Sign Up"
                                        , display: true
                                    }, {
                                        image: pic06
                                        , pageLink: pageLinks.events.careertalk
                                        , title: "ISE Industry and Career Talk"
                                        , body: "ISE Industry and Career Talk is an annual event held in Semester 2 where different industries are invited to share about their company. This event aims to educate ISE undergraduates on how ISE can be applied to different industries and help them understand what companies expect from graduates."
                                        , buttonLink: pageLinks.internal.careertalk
                                        , buttonText: "More"
                                        , display: false
                                    }, {
                                        image: BACC
                                        , pageLink: pageLinks.events.bacc
                                        , title: "Business Analytics Case Competition"
                                        , body: "NUS-ISE BACC, introduced in 2012, is an outreach effort by the NUS-ISEM department to engage the pre-university students in the growing field of business analytics and attract their interests in pursuing related fields in their higher education. Under this platform, students will be exposed to analytics and ISE concepts, and apply them in solving real-world case problem."
                                        , buttonLink: pageLinks.internal.bacc
                                        , buttonText: "More"
                                        , display: false
                                    }, {
                                        image: pic06
                                        , pageLink: "#"
                                        , title: "Engagements"
                                        , body: "Be it NUS Open Day, Freshmen Welcome Tea, Engin Life Fair... catch us at a multitude of events! We work closely with Engin Club and the ISEM Dept to share with the rest of the world what ISE is about."
                                        , buttonLink: "#"
                                        , buttonText: "More"
                                        , display: false
                                    }, {
                                        image: pic06
                                        , pageLink: "#"
                                        , title: "...and many more!"
                                        , body: "We are always exploring new and exciting events for the ISE community! Stay tuned for more exciting events ;)"
                                        , buttonLink: "#"
                                        , buttonText: "More"
                                        , display: false
                                    },
                                ].map((fillData, index) => {
                                    return (
                                        fillData.display
                                            ? <Article key={fillData.title} articleprops={fillData} />
                                            : null
                                    )
                                })}
                            </div>
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