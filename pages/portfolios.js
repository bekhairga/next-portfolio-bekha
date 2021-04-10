import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
// import Link from "next/link";
import { Link } from '../routes';
import axios from 'axios';
import BasePage from '../components/BasePage';
export default class Portfolios extends Component {
	constructor(props) {
		super(props);
	}
	static async getInitialProps() {
		let posts = [];
		try {
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			posts = res.data;
		} catch (error) {
			console.error(error);
		}
		return {
			posts: posts.slice(0, 10),
		};
	}
	renderPosts = (posts) => {
		return posts.map((post) => (
			<li style={{ fontSize: '20px' }} key={post.id}>
				<Link route={`portfolios/${post.id}`}>
					<a>{post.title}</a>
				</Link>
			</li>
		));
	};
	render() {
		const { posts } = this.props;
		return (
			<BaseLayout>
				<BasePage>
					<h2>Portfolios</h2>
					<ul>{this.renderPosts(posts)}</ul>
				</BasePage>
			</BaseLayout>
		);
	}
}
