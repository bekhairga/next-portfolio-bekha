import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
export default class About extends Component {
	render() {
		return (
			<BaseLayout>
				<BasePage className='about-page'>
					<h2>About</h2>
				</BasePage>
			</BaseLayout>
		);
	}
}
