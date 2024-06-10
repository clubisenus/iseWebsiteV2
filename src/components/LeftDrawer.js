import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  SwipeableDrawer,
  List,
  ListItem,
  Collapse,
  Link,
} from "@material-ui/core";
import pageLinks from "../resources/pageLinks";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import { upcoming } from "../resources/events";

const mapStateToProps = (state) => {
  return {
    state: state.iseWebsite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ToggleNavBar: () => dispatch({ type: "TOGGLE_Navbar" }),
    OpenNavBar: () => dispatch({ type: "OPEN_Navbar" }),
    CloseNavBar: () => dispatch({ type: "CLOSE_Navbar" }),
  };
};

class LeftDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEvents: false,
    };
  }

  ToggleEvents() {
    this.setState((state) => ({
      showEvents: !state.showEvents,
    }));
  }

  render() {
    this.ToggleEvents = this.ToggleEvents.bind(this);

    return (
      <SwipeableDrawer
        open={this.props.state.navBar}
        onClose={this.props.CloseNavBar}
        onOpen={this.props.OpenNavBar}
      >
        <div id="sidebar">
          <div className="inner">
            <nav id="menu">
              <header className="major">
                <h2>Menu</h2>
              </header>

              <List>
                <ListItem onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.domain}>Home</Link>
                </ListItem>
                <ListItem onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.about}>About Us</Link>
                </ListItem>
                <ListItem onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.mc18}>
                    23rd Management Committee
                  </Link>
                </ListItem>
                <ListItem onClick={this.ToggleEvents}>
                  <span>Events</span>
                  {this.state.showEvents ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </ListItem>
                <Collapse in={this.state.showEvents}>
                  <List>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.internal.bio}>Upcoming Events</Link>
                    </ListItem>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.foc}>
                        ISE Freshman Orientation Camp
                      </Link>
                    </ListItem>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.day}>ISE Day</Link>
                    </ListItem>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.lasertag}>
                        ISE Special Events
                      </Link>
                    </ListItem>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.cycling}>
                        ISE Night Cycling
                      </Link>
                    </ListItem>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.welfare}>
                        Welfare Giveaways
                      </Link>
                    </ListItem>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.cip}>
                        Community Involvement Projects
                      </Link>
                    </ListItem>
                    <ListItem onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.bacc}>
                        NUS ISE Business Analytics Case Competition
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.sponsors}>Sponsorships</Link>
                </ListItem>
                <ListItem onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.contact}>Contact Us</Link>
                </ListItem>
              </List>
            </nav>

            <section>
              <header className="major">
                <h2>Upcoming Events</h2>
              </header>
              <div className="mini-posts">
                {upcoming.map((event) => (
                  <article key={event.name}>
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

            <section>
              <header className="major">
                <h2>Get in touch</h2>
              </header>
              <p>
                Queries? Feedback? Feel free to reach out to us here! Or you can
                DM us on Instagram :)
              </p>
              <ul className="contact">
                <li className="icon solid fa-envelope">
                  <a href={pageLinks.external.email}>club.ise.nus@gmail.com</a>
                </li>
                <li className="icon solid fa-home">
                  1 Engineering Drive 2, Blk E1A #06-25 <br />
                  Singapore 117576
                </li>
              </ul>
            </section>

            
          </div>
        </div>
      </SwipeableDrawer>
    );
  }
}

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(LeftDrawer)
);
