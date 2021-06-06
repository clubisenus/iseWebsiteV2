import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { iseclublogobanner, ISEDayPoster, ISENight, ISENC2019 } from '../resources/images';
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
const Bio = (props) => (

    <div >
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id='main'>
            <div class="inner">
                <section>
                    <header class="main">
                        <h1>Upcoming Events</h1>
                    </header>
                    <div class="posts">

                        <article>
                            <div id="day">
                                <a href={pageLinks.events.day} class="image"><img src={ISEDayPoster} alt="" /></a>
                                <h3>ISE Day 2019</h3>
                                <p>We're back again with this year's instalment of ISE Day! You know the drill: free buffet food and giveaways :) We will be selling ISE shirts too! Additionally, there will be department/SEP/Micron Internships & System Design Projects talks as well. Sign up now (so we know to cater more food)! </p>
                                <ul class="actions">
                                    <li><a href={pageLinks.signUps.day} class="button">Sign Up</a></li>
                                </ul>
                            </div>
                        </article>

                        <article>
                            <div id="night">
                                <a href={pageLinks.events.night} class="image"><img src={ISENight} alt="" /></a>
                                <h3>ISE Night is back!</h3>
                                <p>This year's instalment of ISE Night ups the game... by 20 floors to be exact. Right in the middle of Singapore's business district, 360 Lounge is a modern oasis with an amazing view, tucked away on the 20th floor of Oxley Tower. Sign up now, and we'll see you there!</p>
                                <ul class="actions">
                                    <li><a href={pageLinks.signUps.night} class="button">Sign Up</a></li>
                                </ul>
                            </div>
                        </article>

                        <article>
                            <div id="NC">
                                <a href={pageLinks.events.cycling} class="image"><img src={ISENC2019} alt="" /></a>
                                <h3>ISE Night Cycling</h3>
                                <p>The annual ISE Night Cycling event is a long time favourite of ours! A night of fun, cycling, and laughter :) Join us in welcoming the freshman into the ISE family this year. An annual event definitely not to be missed! Limited edition Night Cycling shirt + drawstring bag (filled w goodies) for every participant! Sign up now!</p>
                                <ul class="actions">
                                    <li><a href={pageLinks.signUps.cycling} class="button">SIGN UP</a></li>
                                </ul>
                            </div>
                        </article>
                        {/*Update the rest as they are needed*/}
                        {/*
                                        <article>
											<a href="https://nusiseclub.com/welfare" class="image"><img src="images/pic04.jpg" alt="" /></a>
											<h3>Welfare Giveaways</h3>
											<p>The ISE Welfare Pack is an initiative to show appreciation for studentsâ€™ hard work and effort throughout the academic semester. It also serves to encourage and power students through for the upcoming final examinations. Stay tuned for giveaways, be it welfare pack, milk tea...!</p>
											<ul class="actions">
												<li><a href="https://nusiseclub.com/welfare" class="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="https://nusiseclub.com/cip" class="image"><img src="images/CIP.png" alt="" /></a>
											<h3>Community Involvement Projects</h3>
											<p>Every year, the Club partners with external NGOs to give back to the community and make a difference. This provides our students with an opportunity to experience the joy of voluntary servitude. </p>
											<ul class="actions">
												<li><a href="https://nusiseclub.com/cip" class="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="https://nusiseclub.com/careertalk" class="image"><img src="images/pic06.jpg" alt="" /></a>
											<h3>ISE Industry and Career Talk</h3>
											<p>ISE Industry and Career Talk is an annual event held in Semester 2 where different industries are invited to share about their company. This event aims to educate ISE undergraduates on how ISE can be applied to different industries and help them understand what companies expect from graduates.</p>
											<ul class="actions">
												<li><a href="https://nusiseclub.com/careertalk" class="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="https://nusiseclub.com/nusisebacc" class="image"><img src="images/BACC.jpg" alt="" /></a>
											<h3>Business Analytics Case Competition</h3>
											<p>NUS-ISE BACC, introduced in 2012, is an outreach effort by the NUS-ISEM department to engage the pre-university students in the growing field of business analytics and attract their interests in pursuing related fields in their higher education. Under this platform, students will be exposed to analytics and ISE concepts, and apply them in solving real-world case problem.</p>
											<ul class="actions">
												<li><a href="https://nusiseclub.com/nusisebacc" class="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
											<h3>Engagements</h3>
											<p>Be it NUS Open Day, Freshmen Welcome Tea, Engin Life Fair... catch us at a multitude of events! We work closely with Engin Club and the ISEM Dept to share with the rest of the world what ISE is about.</p>

										</article>
										<article>
											<a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
											<h3>...and many more!</h3>
											<p>We are always exploring new and exciting events for the ISE community! Stay tuned for more exciting events ;)</p>

										</article>
										*/}
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
        )(Bio)
    )
)