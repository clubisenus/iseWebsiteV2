import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import { withTheme } from '@material-ui/styles';

const mapStateToProps = state => {
    return {
        //state: state.iseWebsite
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
class DefaultButton extends Component {
    constructor(props) {
        super(props);
		/*
		this.state = {
			//navBar:true,
		};
		*/
    }
    render() {
        let { href, contents } = this.props.ButtonProps
        return (
            <Button variant='outlined' 
            class="button" 
            href={href}
            onClick={console.log(this.props)}
            >
                {contents}
              </Button>
        )
    }
};
export default withRouter(
    withTheme(
        compose(
            connect(
                mapStateToProps,
                mapDispatchToProps)
        )(DefaultButton))
)