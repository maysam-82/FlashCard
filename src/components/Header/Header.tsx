import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
	return (
		<div className="header position-fixed fixed-top border-bottom d-flex align-items-center justify-content-between">
			<div className="links">
				<Link to="/" className="link">
					Home
				</Link>
			</div>
			<h2 className="app-title">FlashCard Application</h2>
		</div>
	);
};

export default Header;
