import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { withTheme } from "@material-ui/styles";

import TopBar from "../components/TopBar";
import LeftDrawer from "../components/LeftDrawer";

import { upcoming } from "../resources/events";

const mapStateToProps = (state) => {
  return {
    //state:state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Bio = (props) => {
  const isSinglePost = upcoming.length === 1;
  const postContainerStyle = isSinglePost ? { display: 'flex', justifyContent: 'center' } : {};

  return (
    <div>
      <LeftDrawer display={props.display} />
      <TopBar />
      <div id="main">
        <div className="inner">
          <section>
            <header className="main">
              <h1>Upcoming Events</h1>
            </header>
            <div className="posts" style={postContainerStyle}>
              {upcoming.map((event, index) => (
                <article key={event.name} style={isSinglePost ? { width: '50%' } : {}}>
                  <div id="day">
                    <a href={event.link} className="image">
                      <img src={event.poster} alt={event.name} />
                    </a>
                    <h3>{event.name}</h3>
                    <p>{event.details}</p>
                    <ul className="actions">
                      <li>
                        <a href={event.link} className="button">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withRouter(
  withTheme(compose(connect(mapStateToProps, mapDispatchToProps))(Bio))
);
