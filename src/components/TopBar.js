import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Button, Toolbar, AppBar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withTheme } from '@material-ui/styles';

import HoverLink from './HoverLink';
import pageLinks from '../resources/pageLinks';
import { socials } from "../resources/socials"; // Import the socials array

const mapStateToProps = state => {
  return {
    state: state.iseWebsite
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ToggleNavBar: () => dispatch({ type: 'TOGGLE_Navbar' }),
  }
}

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  ToggleNavBar() {
    this.props.ToggleNavBar()
  }

  render() {
    this.ToggleNavBar = this.ToggleNavBar.bind(this);
    let socialStyles = { marginLeft: '5px', marginRight: '5px', width: '24px', height: '24px' }; // Adjust the size here
    return (
      <div>
        <AppBar position='fixed'>
          <Toolbar disableGutters={true}>
            <Button
              onClick={this.props.ToggleNavBar}
              //disableRipple={true}
              //disableFocusRipple={true}
              style={{}}
            >
              <Menu color='secondary' />
            </Button>

            <HoverLink HoverProps={{ href: pageLinks.internal.domain, contents: 'NUS ISE Club' }} />

            <div style={{ flexGrow: 1 }} />
            {/*this div is to push the icons all the way to the right*/}
            {socials.map(social => (
              <HoverLink 
                key={social.name}
                HoverProps={{ href: social.link, contents: <img src={social.icon} alt={social.name} style={socialStyles} /> }}
              />
            ))}
          </Toolbar>
        </AppBar>
        <div style={{height:"50px"}}/>
      </div>
    )
  }
}

export default withRouter(
  withTheme(
    compose(
      connect(
        mapStateToProps,
        mapDispatchToProps)
    )(TopBar))
)
