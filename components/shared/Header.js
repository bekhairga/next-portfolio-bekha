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
	NavbarText,
} from 'reactstrap';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color='light' light expand='md'>
				<NavbarBrand href='/'>BekhaIrga</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<Link href='/'>
								<a className='nav-link'>Home</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href='/about'>
								<a className='nav-link'>About</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href='/portfolios'>
								<a className='nav-link'>Portfolios</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href='/blogs'>
								<a className='nav-link'>Blogs</a>
							</Link>
						</NavItem>
						<NavItem>
							<Link href='/cv'>
								<a className='nav-link'>CV</a>
							</Link>
						</NavItem>
					</Nav>
					<NavbarText>Simple Text</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
