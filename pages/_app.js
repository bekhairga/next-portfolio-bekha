import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}
	render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}
