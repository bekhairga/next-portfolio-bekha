import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
export default class Blogs extends Component {
	render() {
		return (
			<BaseLayout>
				<BasePage>
					<h2>Blogs</h2>
				</BasePage>
			</BaseLayout>
		);
	}
}
