import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { withTheme } from "@material-ui/styles";

import TopBar from "../components/TopBar";
import LeftDrawer from "../components/LeftDrawer";

import {
  iseclublogo,
  ISEFOCpic,
  pic02,
  NC,
  pic04,
  CIP,
  pic06,
  BACC,
  iseclubbanner,
} from "../resources/images";
import pageLinks from "../resources/pageLinks";
import { Button } from "@material-ui/core";
import DefaultButton from "../components/DefaultButton";
import { frontpage } from "../resources/events";

const mapStateToProps = (state) => {
  return {
    //state:state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

//update whenever there is a new committee
const Home = (props) => (
  <div>
    <LeftDrawer display={props.display} />
    <TopBar />
    <div id="main">
      <div class="inner">
        <section id="banner">
          <div class="content">
            <header>
              <img src={iseclubbanner} alt="" width="100%" />
              <p>By Students, For Students</p>
            </header>
            <p>
              The National University of Singapore{" "}
              <strong>Industrial & Systems Engineering Club</strong> is a
              student run organisation that seeks to improve the student life
              and welfare of every undergraduate student in the NUS Department
              of Industrial Systems Engineering and Management. The club is
              currently managed by it's 23rd Management Committee.
            </p>
            <ul class="actions">
              <li>
                <a href={pageLinks.internal.about} class="button big">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
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
                <p>
                  In ISE Club, we work to improve the student life of every ISE
                  undergraduate student. From being the voice of our people, to
                  planning new and upcoming events, student life is always
                  exciting in ISE!
                </p>
              </div>
            </article>
            <article>
              <span class="icon solid fa-paper-plane"></span>
              <div class="content">
                <h3>Outreach</h3>
                <p>
                  ISE Club also work with the Department of Industrial Systems
                  Engineering and Management to reach out to Pre-University
                  students, to attract and recruit new freshman.
                </p>
              </div>
            </article>
            <article>
              <span class="icon solid fa-rocket"></span>
              <div class="content">
                <h3>Beyond your degree</h3>
                <p>
                  Worried about your future career? ISE Club plans several
                  events a year, many of which leading industry partners are
                  invited to share about internship and career opportunities
                  available for ISE undergraduates!
                </p>
              </div>
            </article>
            <article>
              <span class="icon solid fa-signal"></span>
              <div class="content">
                <h3>Welfare</h3>
                <p>
                  Look out for various welfare initiatives from us! From exam
                  booster packs to completely random giveaways, ISE Club is
                  always looking out for you.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section>
          <header class="major">
            <h2>Events</h2>
          </header>
          <div class="posts">
            {frontpage.map((event) => (
              <article key={event.name}>
                {event.name !== "... and many more!" && (
                  <a href={event.link} className="image">
                    <img src={event.image} alt={event.name} />
                  </a>
                )}
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                {event.name !== "... and many more!" && (
                  <DefaultButton
                    ButtonProps={{ href: event.link, contents: "more" }}
                  />
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default withRouter(
  withTheme(compose(connect(mapStateToProps, mapDispatchToProps))(Home))
);
