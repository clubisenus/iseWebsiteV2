import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SwipeableDrawer, List, ListItem, Collapse, Link } from '@material-ui/core';
import pageLinks from '../resources/pageLinks'
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';
import { pic07, ISENC2019, pic09 } from '../resources/images';
const mapStateToProps = state => {
    return {
        state: state.iseWebsite
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ToggleNavBar: () => dispatch({ type: 'TOGGLE_Navbar' }),
        OpenNavBar: () => dispatch({ type: 'OPEN_Navbar' }),
        CloseNavBar: () => dispatch({ type: 'CLOSE_Navbar' }),
    }
}
class LeftDrawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEvents: false,
        };
    };
    ToggleEvents() {
        this.setState(state => ({
            showEvents: !state.showEvents
        }));
    };
    render() {
        this.ToggleEvents = this.ToggleEvents.bind(this)
        return (

            <SwipeableDrawer
                open={this.props.state.navBar}
                onClose={this.props.CloseNavBar}
                onOpen={this.props.OpenNavBar}
            >
                <div id="sidebar">
                    {/*<div>*/}
                    <div class="inner">
                        {/*let's not put a searchbar if we can't get it to work*/}
                        {/*
                        
                        <section id="search" class="alt">
                            <form method="post" action="#">
                                <input type="text" name="query" id="query" placeholder="Search" />
                            </form>
                        </section>
                        */}
                        <nav id="menu">
                            <header class="major">
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
                                    <Link href={pageLinks.internal.mc18}>18th Management Committee</Link>
                                </ListItem>
                                <ListItem onClick={this.props.ToggleNavBar}>
                                    <Link href={pageLinks.internal.blog}>Blog</Link>
                                </ListItem>

                                <ListItem onClick={this.ToggleEvents}>
                                    <span >Events</span>
                                    {
                                        this.state.showEvents
                                            ? <KeyboardArrowUp />
                                            : <KeyboardArrowDown />
                                    }
                                </ListItem>
                                <Collapse in={this.state.showEvents}>
                                    <List>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.internal.bio}>Upcoming Events</Link>
                                        </ListItem>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.events.foc}>ISE Freshman Orientation Camp</Link>
                                        </ListItem>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.events.day}>ISE Day</Link>
                                        </ListItem>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.events.cycling}>ISE Night Cycling</Link>
                                        </ListItem>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.events.welfare}>Welfare Giveaways</Link>
                                        </ListItem>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.events.cip}>Community Involvement Projects</Link>
                                        </ListItem>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.events.careertalk}>ISE Industry and Career Talk</Link>
                                        </ListItem>
                                        <ListItem onClick={this.props.ToggleNavBar}>
                                            <Link href={pageLinks.events.bacc}>NUS ISE Business Analytics Case Competition</Link>
                                        </ListItem>
                                    </List>
                                </Collapse>

                                <ListItem onClick={this.props.ToggleNavBar}>
                                    <Link href={pageLinks.internal.shop}>Merchandise</Link>
                                </ListItem>
                                <ListItem onClick={this.props.ToggleNavBar}>
                                    <Link href={pageLinks.internal.sponsors}>Sponsorship</Link>
                                </ListItem>
                                <ListItem onClick={this.props.ToggleNavBar}>
                                    <Link href={pageLinks.internal.contact}>Contact Us</Link>
                                </ListItem>
                            </List>
                        </nav>

                        <section>
                            <header class="major">
                                <h2>Upcoming Events</h2>
                            </header>
                            <div class="mini-posts">
                                {/*
                                <article>
                                    <a onClick={this.props.ToggleNavBar} href={pageLinks.events.day} class="image"><img src={pic07} alt="" /></a>
                                    <p>ISE Day is here soon! Click <a href={pageLinks.events.day}>here</a> to find out more.</p>
                                </article>
                                */}
                                <article>
                                    <a onClick={this.props.ToggleNavBar} href={pageLinks.events.cycling} class="image"><img src={ISENC2019} alt="" /></a>
                                    <p>Ready for a night of fun and laughter? Learn more about Night Cycling <a href={pageLinks.events.cycling}>here</a>.</p>
                                </article>
                                <article>
                                    <a onClick={this.props.ToggleNavBar} href={pageLinks.internal.shop} class="image"><img src={pic09} alt="" /></a>
                                    <p>ISE Shirt Sales have started! Click <a href={pageLinks.internal.shop}>here</a> to shop now</p>
                                </article>
                            </div>
                            <ul class="actions">
                                <li><a href={pageLinks.internal.bio} class="button">More</a></li>
                            </ul>
                        </section>

                        <section>
                            <header class="major">
                                <h2>Get in touch</h2>
                            </header>
                            <p>Queries? Feedback? Feel free to reach out to us here! Or you can DM us on Instagram ;)</p>
                            <ul class="contact">
                                <li class="icon solid fa-envelope"><a href={pageLinks.external.email}>club.ise.nus@gmail.com</a></li>
                                <li class="icon solid fa-home">1 Engineering Drive 2, Blk E1A #06-25 <br />
                                    Singapore 117576</li>
                            </ul>
                        </section>

                        <footer id="footer">
                            <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                        </footer>

                    </div>
                </div>
            </SwipeableDrawer >
        )
    }
}

export default withRouter(
    compose(
        connect(
            mapStateToProps,
            mapDispatchToProps)
    )(LeftDrawer)
)