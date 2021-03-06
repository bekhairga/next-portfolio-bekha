import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import BasePage from '../components/BasePage';
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.roles = [
			'Full Stack Developer',
			'Tech Lover',
			'Team Player',
			'MERM Stack Developer',
			'Ambitious coder',
		];
	}
	render() {
		return (
			<BaseLayout className='cover'>
				<div className='main-section'>
					<div className='background-image'>
						<img src='/images/background-index.png' />
					</div>

					<Container>
						<Row>
							<Col md='6'>
								<div className='hero-section'>
									<div className={`flipper`}>
										<div className='back'>
											<div className='hero-section-content'>
												<h2> Full Stack Web Developer </h2>
												<div className='hero-section-content-intro'>
													Have a look at my portfolio and job history.
												</div>
											</div>
											<img className='image' src='/images/section-1.png' />
											<div className='shadow-custom'>
												<div className='shadow-inner'> </div>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md='6' className='hero-welcome-wrapper'>
								<div className='hero-welcome-text'>
									<h1>
										Welcome to the portfolio website of Filip Jerga. Get
										informed, collaborate and discover projects I was working on
										through the years!
									</h1>
								</div>
								<Typed
									loop
									typeSpeed={60}
									backSpeed={60}
									strings={this.roles}
									shuffle={false}
									backDelay={1000}
									loopCount={0}
									showCursor
									cursorChar='|'
									className='self-typed'
								/>
								<div className='hero-welcome-bio'>
									<h1>Let's take a look on my work.</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</BaseLayout>
		);
	}
}
