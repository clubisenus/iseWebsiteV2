import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { iseclublogo, ISEFOCpic, pic02, NC, pic04, CIP, pic06, BACC } from '../resources/images';
import pageLinks from '../resources/pageLinks';
import { Button } from '@material-ui/core';
import DefaultButton from '../components/DefaultButton';
import Article from '../components/Article';

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
            <section id="banner">
              <div class="content">
                <header>
                  <h1>NUS Industrial & Systems Engineering Club</h1>
                  <p>By Students, For Students</p>
                </header>
                <p>The National University of Singapore <strong>Industrial & Systems Engineering Club</strong> is a student run organisation that seeks to improve the student life and welfare of every undergraduate student in the NUS Department of Industrial Systems Engineering and Management. The club is currently managed by it's 18th Management Committee. This website is under construction; stay tuned for more!</p>
                <ul class="actions">
                  <li><a href={pageLinks.internal.about} class="button big">Learn More</a></li>
                </ul>
              </div>
              <span class="image object">
                <img src={iseclublogo} alt="" />
              </span>
            </section>

            <section>
              <header class="major">
                <h2>What we do</h2>
              </header>
              <div class="features">
                <article>
                  <span class="icon fa-gem"></span>
                  <div class="content">
                    <h3>Student Life</h3>
                    <p>In ISE Club, we work to improve the student life of every ISE undergraduate student. From being the voice of our people, to planning new and upcoming events, student life is always exciting in ISE!</p>
                  </div>
                </article>
                <article>
                  <span class="icon solid fa-paper-plane"></span>
                  <div class="content">
                    <h3>Outreach</h3>
                    <p>ISE Club also work with the Department of Industrial Systems Engineering and Management to reach out to Pre-University students, to attract and recruit new freshman.</p>
                  </div>
                </article>
                <article>
                  <span class="icon solid fa-rocket"></span>
                  <div class="content">
                    <h3>Beyond your degree</h3>
                    <p>Worried about your future career? ISE Club plans several events a year, many of which leading industry partners are invited to share about internship and career opportunities available for ISE undergraduates!</p>
                  </div>
                </article>
                <article>
                  <span class="icon solid fa-signal"></span>
                  <div class="content">
                    <h3>Welfare</h3>
                    <p>Look out for various welfare initiatives from us! From exam booster packs to completely random giveaways, ISE Club is always looking out for you.</p>
                  </div>
                </article>
              </div>
            </section>

            <section>
              <header class="major">
                <h2>Events</h2>
              </header>
              <div class="posts">
                {[
                  {
                    image: ISEFOCpic
                    , pageLink: pageLinks.events.foc
                    , title: "ISE Freshman Orientation Camp"
                    , body: "Every year, we welcome new freshman into our ISE family with a bang! The 4D3N camp, held on the last week of July, serves to introduce freshman into University life, and provides them with a strong support network of seniors and peers to ease their transition into NUS."
                  }, {
                    image: pic02
                    , pageLink: pageLinks.events.day
                    , title: 'ISE Day'
                    , body: 'This is the day we take a break from lessons and gather for an afternoon of food and chilling! ISE Day is an annual two-part event. The first part consists of informative talks regarding VIP, SEP and NOC followed by a feedback and Q&A session with professors from the ISEM department. The second part is a get together sessions with food, games, giveaways, lucky draw and even performances!'
                  }, {
                    image: NC
                    , pageLink: pageLinks.events.cycling
                    , title: 'ISE Night Cycling'
                    , body: 'The annual ISE Night Cycling event is a long time favourite of the ISE ungraduate community. It also serves as a platform for seniors to interact and welcome juniors into ISE!'
                  }, {
                    image: pic04
                    , pageLink: pageLinks.events.welfare
                    , title: 'Welfare Giveaways'
                    , body: 'The ISE Welfare Pack is an initiative to show appreciation for students’ hard work and effort throughout the academic semester. It also serves to encourage and power students through for the upcoming final examinations. Stay tuned for giveaways, be it welfare pack, milk tea...!'
                  }, {
                    image: CIP
                    , pageLink: pageLinks.events.cip
                    , title: 'Community Involvement Projects'
                    , body: 'Every year, the Club partners with external NGOs to give back to the community and make a difference. This provides our students with an opportunity to experience the joy of volunteering.'
                  }, {
                    image: pic06
                    , pageLink: pageLinks.events.careertalk
                    , title: 'ISE Industry and Career Talk'
                    , body: 'ISE Industry and Career Talk is an annual event held in Semester 2 where different industries are invited to share about their company. This event aims to educate ISE undergraduates on how ISE can be applied to different industries and help them understand what companies expect from graduates.'
                  }, {
                    image: BACC
                    , pageLink: pageLinks.events.bacc
                    , title: 'Business Analytics Case Competition'
                    , body: 'NUS-ISE BACC, introduced in 2012, is an outreach effort by the NUS-ISEM department to engage the pre-university students in the growing field of business analytics and attract their interests in pursuing related fields in their higher education. Under this platform, students will be exposed to analytics and ISE concepts, and apply them in solving real-world case problem.'
                  }, {
                    image: pic06
                    , pageLink: '#'
                    , title: 'Engagements'
                    , body: 'Be it NUS Open Day, Freshmen Welcome Tea, Engin Life Fair... catch us at a multitude of events! We work closely with Engin Club and the ISEM Dept to share with the rest of the world what ISE is about.'
                  }, {
                    image: pic06
                    , pageLink: '#'
                    , title: '...and many more!'
                    , body: 'We are always exploring new and exciting events for the ISE community! Stay tuned for more exciting events ;)'
                  }
                ].map((fillData, index) => {
                  return (
                    <Article key={fillData.title} articleprops={fillData} />
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </div >
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