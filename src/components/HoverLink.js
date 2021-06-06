/*
Leave this alone for now
TODO{
    black when let alone
    red text when hover
}
*/



import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Typography, Link } from '@material-ui/core';
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
class HoverLink extends Component {
    constructor(props) {
        super(props);
		/*
		this.state = {
			//navBar:true,
		};
		*/
    }
    render() {
        let { href, contents } = this.props.HoverProps
        let style = {marginBottom: 0, marginTop: 0,...this.props.style,color:this.props.theme.palette.text.primary}
        return (
            <Link href={href}>
                <Typography color='textPrimary' variant='h3' class='logo' style={style}>
                    {contents}
                </Typography>
            </Link>
        )
    }
}
export default withRouter(
    withTheme(
        compose(
            connect(
                mapStateToProps,
                mapDispatchToProps)
        )(HoverLink))
)