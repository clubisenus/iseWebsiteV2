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
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import pageLinks from "../resources/pageLinks";
import { upcoming } from "../resources/events";
import styled from "styled-components";

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

const Sidebar = styled.div`
  width: 25vw; // 1/3rd of the viewport width
  max-width: 100%; // Maximum width to ensure it doesn't get too wide on large screens
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  background-color: #fff;
  z-index: 1300;

  @media (max-width: 600px) {
    width: 80vw; // Fallback to 80% of the viewport width on smaller screens
  }
`;

const Header = styled.header`
  font-size: 1.5em;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContactLi = styled.li`
  font-size: 0.9rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

class LeftDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEvents: false,
    };

    this.ToggleEvents = this.ToggleEvents.bind(this);
  }

  ToggleEvents() {
    this.setState((state) => ({
      showEvents: !state.showEvents,
    }));
  }

  render() {
    return (
      <SwipeableDrawer
        open={this.props.state.navBar}
        onClose={this.props.CloseNavBar}
        onOpen={this.props.OpenNavBar}
        disableBackdropTransition={true}
        disableDiscovery={true}
      >
        <Sidebar>
          <div className="inner">
            <nav id="menu">
              <Header className="major">
                <h2>Menu</h2>
              </Header>

              <List>
                <ListItem button onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.domain}>Home</Link>
                </ListItem>
                <ListItem button onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.about}>About Us</Link>
                </ListItem>
                <ListItem button onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.mc18}>
                    23rd Management Committee
                  </Link>
                </ListItem>
                <ListItem button onClick={this.ToggleEvents}>
                  <span>Events</span>
                  {this.state.showEvents ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </ListItem>
                <Collapse in={this.state.showEvents}>
                  <List>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.internal.bio}>Upcoming Events</Link>
                    </ListItem>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.foc}>
                        ISE Freshman Orientation Camp
                      </Link>
                    </ListItem>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.day}>ISE Day</Link>
                    </ListItem>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.lasertag}>
                        ISE Special Events
                      </Link>
                    </ListItem>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.cycling}>
                        ISE Night Cycling
                      </Link>
                    </ListItem>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.welfare}>
                        Welfare Giveaways
                      </Link>
                    </ListItem>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.cip}>
                        Community Involvement Projects
                      </Link>
                    </ListItem>
                    <ListItem button onClick={this.props.ToggleNavBar}>
                      <Link href={pageLinks.events.bacc}>
                        NUS ISE Business Analytics Case Competition
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
                <ListItem button onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.sponsors}>Sponsorships</Link>
                </ListItem>
                <ListItem button onClick={this.props.ToggleNavBar}>
                  <Link href={pageLinks.internal.contact}>Contact Us</Link>
                </ListItem>
              </List>
            </nav>

            <br/> 
            <br/>

            <section>
              <Header className="major">
                <h2>Upcoming Events</h2>
              </Header>
              <div className="mini-posts">
                {upcoming.map((event) => (
                  <article key={event.name}>
                    <div id="day">
                      <a href={event.link} className="image">
                        <Img src={event.poster} alt={event.name} />
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
              <Header className="major">
                <h2>Get in touch</h2>
              </Header>
              <p>
                Queries? Feedback? Feel free to reach out to us here! Or you can
                DM us on Instagram :)
              </p>
              <ul className="contact">
                <ContactLi className="icon solid fa-envelope">
                  <a href={pageLinks.external.email}>club.ise.nus@gmail.com</a>
                </ContactLi>
                <ContactLi className="icon solid fa-home">
                  1 Engineering Drive 2, Blk E1A #06-25 <br />
                  Singapore 117576
                </ContactLi>
              </ul>
            </section>
          </div>
        </Sidebar>
      </SwipeableDrawer>
    );
  }
}

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(LeftDrawer)
);
