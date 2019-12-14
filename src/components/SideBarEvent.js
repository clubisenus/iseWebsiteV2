import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withTheme } from '@material-ui/styles';

import DefaultButton from './DefaultButton'

const mapStateToProps = state => {
    return {
        //state: state.iseWebsite
    }
}
const mapDispatchToProps = dispatch => {
    return {
        ToggleNavBar: () => dispatch({ type: 'TOGGLE_Navbar' }),
        OpenNavBar: () => dispatch({ type: 'OPEN_Navbar' }),
        CloseNavBar: () => dispatch({ type: 'CLOSE_Navbar' }),
    }
}
class SideBarEvent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ...this.props.eventprops
        };
        
    }
    render() {
        let {
            image, pageLink,
            body,
        } = this.props.eventprops
        
        return (
            <article >
                <a href={pageLink} onClick={this.props.CloseNavBar} class="image"><img src={image} alt="" /></a>
                <p>{body}</p>
            </article>
        )
    }
};
export default withRouter(
    withTheme(
        compose(
            connect(
                mapStateToProps,
                mapDispatchToProps)
        )(SideBarEvent))
)