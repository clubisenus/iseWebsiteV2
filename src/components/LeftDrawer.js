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
  Modal,
  Backdrop,
  Fade,
  Button,
} from "@material-ui/core";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import styled from "styled-components";
import Lottie from "lottie-react";
import animation from "../resources/animations/WelfareDay.json";
import pageLinks from "../resources/pageLinks";
import bannerpic from "../upcomingEvents/banner.png";
import { upcomingEvent } from "../upcomingEvents/index.js";

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

const ContactLi = styled.li`
  font-size: 0.9rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 1.1em;
  padding: 20px;
  text-align: center;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  outline: none;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CustomButton = styled(Button)`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

class LeftDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEvents: false,
      hover: false, // Hover state to track mouse hover
      isModalOpen: false, // Modal open state
    };

    this.animationRef = React.createRef(); // Ref for the Lottie animation

    this.ToggleEvents = this.ToggleEvents.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleLottieClick = this.handleLottieClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  ToggleEvents() {
    this.setState((state) => ({
      showEvents: !state.showEvents,
    }));
  }

  handleMouseEnter() {
    if (this.animationRef.current) {
      this.animationRef.current.play(); // Play animation on hover
    }
  }

  handleMouseLeave() {
    if (this.animationRef.current) {
      this.animationRef.current.stop(); // Stop animation on mouse leave
    }
  }

  handleLottieClick() {
    this.setState({ isModalOpen: true }); // Open modal on Lottie click
  }

  handleModalClose() {
    this.setState({ isModalOpen: false }); // Close modal
  }

  handleButtonClick() {
    upcomingEvent.link.forEach((url) => {
      window.open(url, "_blank");
    });
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

            <br />
            <br />

            <section>
              <Header className="major">
                <h2>Upcoming Events</h2>
              </Header>
              <div
                className="mini-posts"
                onMouseEnter={this.handleMouseEnter} // Start animation on hover
                onMouseLeave={this.handleMouseLeave} // Stop animation when hover ends
                onClick={this.handleLottieClick} // Open modal on click
                style={{ cursor: "pointer" }}
              >
                <Lottie
                  lottieRef={this.animationRef} // Ref to control the Lottie animation
                  animationData={animation}
                  loop
                  autoplay={false} // Prevent autoplay
                  style={{ width: "100%", height: "auto" }}
                />
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

            {/* Modal */}
            <Modal
              open={this.state.isModalOpen}
              onClose={this.handleModalClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={this.state.isModalOpen}>
                <ModalContainer>
                  <Banner src={bannerpic} alt="Upcoming Event Banner" />
                  <h2>{upcomingEvent.title}</h2>
                  <Description>{upcomingEvent.description}</Description>
                  <ButtonContainer>
                    <CustomButton onClick={this.handleButtonClick}>
                      Click here to sign up!
                    </CustomButton>
                  </ButtonContainer>
                  <br />
                  <Button onClick={this.handleModalClose}>Close</Button>
                </ModalContainer>
              </Fade>
            </Modal>
          </div>
        </Sidebar>
      </SwipeableDrawer>
    );
  }
}

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(LeftDrawer)
);
