import React, { Component } from 'react';

var NewsletterPageStyle = {
	backgroundColor: "azure",
}

var titleStyle = {
	paddingTop: "20px",
	paddingLeft: "10em"
}

export default class NewsletterPage extends Component {
    render() {
        return (
        	<div className="newsletter-page" style={NewsletterPageStyle}>
        		<h2 style={titleStyle}>Sign up for our newsletter</h2>
        	</div>
        );
    }
}