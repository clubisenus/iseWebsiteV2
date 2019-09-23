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
    }
}
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.articleprops
        };
    }
    render() {
        let {
            image, pageLink,
            title, body,
            buttonLink, buttonText
        } = this.props.articleprops

        
        return (
            <article>
                <a href={pageLink} class="image"><img src={image} alt="" /></a>
                <h3>{title}</h3>
                <p>{body}</p>
                <DefaultButton ButtonProps={{ href: buttonLink, contents: buttonText }}></DefaultButton>
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
        )(Article))
)