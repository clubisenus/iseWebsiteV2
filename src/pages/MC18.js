import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withTheme } from '@material-ui/styles';

import TopBar from '../components/TopBar'
import LeftDrawer from '../components/LeftDrawer'

import { pic01, pic02, pic11, mc18banner, p18, vpi18, vpe18, gs18, fs18, isedpd18, ncpd18, slpdc18, slpdo18, wpd18, baccpdc18, baccpdt18} from '../resources/images';

const mapStateToProps = state => {
    return {
        //state:state
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
const MC18 = (props) => (
    <div>
        <LeftDrawer
            display={props.display}
        />
        <TopBar />
        <div id="main">
            <div class="inner">
                <section>
                    <header class="main">
                        <h1>18th Management Committee</h1>
                    </header>
                    <span class="image main"><img src={mc18banner} alt="" /></span>
					<p><br></br><br></br>The <strong>NUS Industrial Systems & Engineering Club 18th Management Committee</strong> is formed out of 28 dedicated individuals. The largest Management Committee in the history of the Club at its time, the team brought forth new and improved student life projects, and dedicated their time and effort to looking out for the interests of the ISE undergraduates.<br></br><br></br></p>
                    <hr class="major" />
                    <h2>President</h2>
                    <p><span class="image leftmc"><img src={p18} alt="" /></span><br></br><br></br><br></br><strong>James Chua</strong> led the 18th Management Committee. Together with his team, the president represents the interests of the Club as well as all undergraduates in ISE, and work with other student leaders to raise pertinent issues to the School. The president manages the overall direction and operations of the Club and its events, and anchors major discusions with the Department office and other relevant parties. He approves and manages all events within the Club, and works closely with all his Project Directors. Finally, he is ultimately responsible and answerable for the safety and conduct of all Club events and activities.<br></br><br></br>During his time as president, James led a major restructuring of the Club organisation, which allowed for better and more student life events. He and his team successfully established professional relations with external organisations and industries, and formalised the role the Club plays within ISE community. He enjoys trying new recipes in the kitchen, and at times you may catch him sailing on the weekend!<br></br></p>
                    <hr class="major" />
                    <h2 align="right">Vice President (Internal)</h2>
                    <p><span class="image rightmc"><img src={vpi18} alt="" /></span><br></br><br></br><br></br><br></br>As Vice President (Internal), <strong>Elle Lee</strong> leads internal operations with the Club. She manages all student life projects within ISE, and ensures that all Club activities and events are in accordance with School guidelines. The Vice President also maintains a cohesive and inclusive environment both within the Club, as well as the ISE student community. She provides constant guidance to the juniors within the Club, and advices the Exco on matters at hand. In her capacity as Vice President, she works closely with the President, and has stepped up on multiple occasions when necessary. <br></br><br></br> A steadfast and levelheaded person, she has provided the Exco, as well the Club, stability in trying times, and is a key person in the Club's decision making process. A baking enthusiast, you may just catch the lingering smell of a bakery in the air as she hands you a treat from her latest batch of creations.<br></br><br></br></p>

                    <hr class="major" />
                    <h2>Vice President (External)</h2>
                    <p><span class="image leftmc"><img src={vpe18} alt="" /></span><br></br><br></br><br></br>As Vice President (External), <strong>Applelyn Tan</strong> is responsible for maintaining the image of the Club, both externally and internally. She also handles all the social media accounts and public relation activities for the Club.⠀Most importantly, she works with several external industry leaders to bring about various opportunities for our students, ranging from career talks to sponsorships for various Student Life Projects.<br></br><br></br>In her tenor as Vice President, she has established a working relationship with Shopee and Micron Technology, which has resulted in the Club being recognised as an official supporting partner in Shopee's <i>National Data Science Challenge 2019</i>, <i>I’m the Best Coder! Challenge 2019</i>, and <i>I’m the Best Coder! Challenge Campus Edition 2020</i>, as well as the successful partnership with Micron as the name sponsor of <i>Micron NUS ISE Business Analytics Case Competition 2020</i>. An active person, Applelyn has been seen passing people at her neighborhood park in her nightly jogs. She has resolved to beat Usain Bolt by the time she graduates.<br></br></p>
                    <hr class="major" />
                    <h2 align="right">General Secretary</h2>
                    <p><span class="image rightmc"><img src={gs18} alt="" /></span><br></br><br></br><strong>Tan De Jun</strong> plays a pivotal role as General Secretary. He is responsible for all administrative operations that allow for the smooth day to day running of the Club, and maintains accurate records of meeting minutes and documentations, and also oversees the managing of our online resources. The General Secretary is also responsible for internal and external communications and publications, and is vital in the Club's push to being communicative to our undergraduates.<br></br><br></br>Being meticulous has proven to be an invaluable trait in De Jun's capacity as General Secretary. In his tenor, De Jun has worked to partner with several external organisations to push for a change in the way the Club conducts Community Involvement Projects. His actions have won much praises from those organisations, who subsequently have reached out to the Club time and again to partner for numerous events. A food connoisseur born and bred, there is not much he won't do for good food. You may spot him on the basketball court easily as well, as his towering height dwarfs most.<br></br></p>
                    <hr class="major" />
                    <h2>Financial Secretary</h2>
                    <p><span class="image leftmc"><img src={fs18} alt="" /></span><br></br><br></br><br></br>As Financial Secretary, <strong>Lai Zi Ying</strong> oversees costs management and budgeting within the Club and its Projects. She manages all purchase approvals and ensures timely payment and reimbursement to relevant parties. The Financial Secretary also checks and ensures that the Club operates in compliance with NUS Financial Guidelines, and exercises financial prudency as well. She works closely with our external sponsors to handle fund transfers and procurement. Finally, she is responsible for maintaining the financial health of the Club.<br></br><br></br>Being responsible, Zi Ying has oversight over the entire budget for the Club and its subsequent dispersal to the Club's Projects. In her tenor, she has overhauled and introduced a new financial tracking method for the Club, to improve the accountability of all Club expenditures. When not deciding on what to eat next, Zi Ying has graced the stage often to impress with her vocals. And yes, she knows all the foodie spots on both sides of the Causeway!<br></br><br></br></p>
                    <hr class="major" />
                    <h2 align="right">ISE Day 2019 Project Director</h2>
                    <p><span class="image rightmc"><img src={isedpd18} alt="" /></span><br></br><br></br><br></br><br></br><strong>Ong Wei Cheng</strong> is the Project Director of ISE Day 2019. The once a year event brings undergraduates of all years together, and serves as an important event for freshmen and seniors alike to mingle and bond. In addition, the events serves as a platform for the Department to reach out to the undergraduates for feedback, with the goal of seeking continuous improvements for ISE modules for our undergraduates. With support from the Department, Wei Cheng works closely with relevant stakeholders to ensure the successful delivery of the event.<br></br><br></br>This year's event also marks the first time Micron Technology partners with the Club on such an event. Together with Wei Cheng, <strong>Li Keyou</strong> and <strong>Ong Jing Xin</strong> serve as the Vice Project Directors.<br></br><br></br></p>
                    <hr class="major" />
                    <h2>ISE Night Cycling 2019 Project Director</h2>
                    <p><span class="image leftmc"><img src={ncpd18} alt="" /></span><br></br><br></br><br></br><br></br><strong>Tan De Ming</strong> serves as the Project Director of ISE Night Cycling 2019. This landmark event has been the hallmark of ISE student life, and the 2019 edition brings the ISE family out on a bicycle tour of the city. Participants were treated to a breathtaking view of at the city at night, as well as an introduction to the many late night supper spots around! Coordinating with various committees, as well as several stakeholders, the event serves as a freshmen welcome event, for the seniors to welcome the new freshmen into the ISE family. <br></br><br></br>This event is challenging to lead, from a logistical, operations and safety point of view. Nonetheless, De Ming, along with the Vice Project Directors <strong>Justin Hong</strong> and <strong>Lin Wen Jing</strong> took up the challenge willingly.<br></br><br></br></p>
                    <hr class="major" />
                    <h2 align="right">Student Life Projects Director</h2>
                    <p><span class="image rightmc"><img src={slpdc18} alt="" /></span><br></br><br></br><strong>Chiang Shun De</strong> serves as the co-Director of Student Life Projects in the 18th Management Committee. Prior to this appointment, he has served as the ISE Freshman Orientation Camp 2019 Vice Project Director, as well as its Chief Safety Officer. Well versed in the planning and conduct of Student Life Projects, Shun De works closely with the Vice Directors <strong>Chow Yi-Ting</strong> and <strong>Daniel Chong</strong> to deliver exciting events to the student population.</p>
                    <h2>Student Life Projects Director</h2>
                    <p><span class="image leftmc"><img src={slpdo18} alt="" /></span><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>Together with Shun De, <strong>Ong Jing Quan</strong> serves as the co-Director of Student Life Projects. The team has delivered several successful projects, including the first ever ISE Cohesion night. The team's events remains as one of the most popular in the ISE community. As Student Life Project Directors, the projects each present unique challenges and have tested the problem solving skills of the Directors many a times, but the continued popularity and success of the events has proven the mettle of our Directors. <br></br></p>
                    <hr class="major" />
                    <h2 align="right">Welfare Projects Director</h2>
                    <p><span class="image rightmc"><img src={wpd18} alt="" /></span><br></br><br></br><br></br><br></br><strong>Cheng Tze Ning</strong> serves as Welfare Projects Director in the 18th Management Committee. Suffice to say, all welfare projects comes under her purview, and her projects has improved the student life of many ISE students. From Exam Welfare Pack giveaways, to the occasional free bubble tea, Tze Ning leads a team that works to deliver welfare to the student population. Welfare projects remain an integral part of the Club, and serves to boost the morale of our student population. <br></br><br></br>Working under a carefully planned budget, Tze Ning and the Vice Directors <strong>Aaron Teo</strong> and <strong>Cherlene Kuah</strong> coordinate logistical and operational efforts to successfully execute each welfare event.<br></br><br></br></p>
                    <hr class="major" />
                    <h2>Micron NUS ISE Business Analytics Case Competition 2020 Project Director</h2>
                    <p><span class="image leftmc"><img src={baccpdc18} alt="" /></span><br></br><br></br><strong>Christopher Png</strong> serves as the co-Project Director of the biggest NUS ISE BACC as yet. The NUS ISE BACC is an outreach effort by the Club and the Department, and is an annual case competition that bring students together from different Pre-University institutions, to solve real world problem sets using data and system engineering principles. With an additional category introduced for undergraduates, and a partnership with Micron Technology, the competition stands at its biggest ever, with participant numbers expected to exceed 300. Working in conjunction with our Directors are the Vice Project Directors <strong>Justin Hong</strong>, <strong>Ong Li Jun</strong> and <strong>Siow Hui Xin</strong>.<br></br><br></br></p>
                    <h2 align="right">Micron NUS ISE Business Analytics Case Competition 2020 Project Director</h2>
                    <p><span class="image rightmc"><img src={baccpdt18} alt="" /></span><br></br><br></br><br></br><br></br><br></br><br></br>Together with Christopher, <strong>Teo Jun Xiang</strong> serves as the co-Project Director of the Micron NUS ISE BACC 2020.  With the largest prize pool in the competition’s 9-year history, the competition is shaping up to be the largest project ever undertaken by the Club. This year's edition presents our Directors with a unique set of challenges as well, in light of the COVID-19 coronavirus situation. Working closely with Micron Technology and the Department, the Directors will present the Challenge in mid 2020. <br></br><br></br><br></br></p>
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
        )(MC18)
    )
)