
import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container } from 'reactstrap';
export default class Index extends Component {
	render() {
		return (
			<BaseLayout>
				<Container>
					<h2>Index page</h2>
					<Button color='danger'>Click me</Button>
				</Container>
			</BaseLayout>
		);
	}
