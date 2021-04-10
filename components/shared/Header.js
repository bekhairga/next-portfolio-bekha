import React, { useState } from 'react';
import Link from 'next/link';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar
				className='port-navbar port-default absolute'
				color='light'
				dark
				expand='md'
				style={{ backgroundColor: 'transparent!important' }}
			>
				<NavbarBrand className='port-navbar-brand' href='/'>
					BekhaIrga
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem className='port-navbar-item'>
							<Link href='/'>
								<a className='nav-link port-navbar-link'>Home</a>
							</Link>
						</NavItem>
						<NavItem className='port-navbar-item'>
							<Link href='/about'>
								<a className='nav-link port-navbar-link'>About</a>
							</Link>
						</NavItem>
						<NavItem className='port-navbar-item'>
							<Link href='/portfolios'>
								<a className='nav-link port-navbar-link'>Portfolios</a>
							</Link>
						</NavItem>
						<NavItem className='port-navbar-item'>
							<Link href='/blogs'>
								<a className='nav-link port-navbar-link'>Blogs</a>
							</Link>
						</NavItem>
						<NavItem className='port-navbar-item'>
							<Link href='/cv'>
								<a className='nav-link port-navbar-link'>CV</a>
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
