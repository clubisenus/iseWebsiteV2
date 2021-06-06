import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Button, Toolbar, AppBar } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { withTheme } from '@material-ui/styles';

import HoverLink from './HoverLink'
import pageLinks from '../resources/pageLinks'

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
		/*
		this.state = {
			//navBar:true,
		};
		*/
  }

  ToggleNavBar() {
    this.props.ToggleNavBar()

  }

  render() {
    this.ToggleNavBar = this.ToggleNavBar.bind(this)
    let socialStyles = { marginLeft: '5px', marginRight: '5px' };
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
          <HoverLink HoverProps={{ href: pageLinks.external.instagram, contents: <span class="icon brands fa-instagram" style={socialStyles} /> }} />
          <HoverLink HoverProps={{ href: pageLinks.external.facebook, contents: <span class="icon brands fa-facebook-f" style={socialStyles} /> }} />
          <HoverLink HoverProps={{ href: pageLinks.external.linkedin, contents: <span class="icon brands style2 fa-linkedin-in" style={socialStyles} /> }} />
          <HoverLink HoverProps={{ href: pageLinks.external.email, contents: <span class="icon style2 fa-envelope" style={socialStyles} /> }} />
        </Toolbar>
      </AppBar>
      <div style={{height:"50px"}}/>
      </div>
    )
  }
}

//export default LeftDrawer2

export default withRouter(
  withTheme(
    compose(
      connect(
        mapStateToProps,
        mapDispatchToProps)
    )(TopBar))
)