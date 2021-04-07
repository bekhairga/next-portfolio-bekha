import React from 'react';
import Header from '../shared/Header';

function BaseLayout(props) {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
}

export default BaseLayout;
