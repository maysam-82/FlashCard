import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
	return (
		<div className="header position-fixed fixed-top border-bottom d-flex align-items-center justify-content-between bg-white">
			<div className="links d-flex">
				<Link to="/" className="link">
					Home
				</Link>
				<Link to="/stack-registeration" className="link">
					New Stack
				</Link>
			</div>
			<h2 className="app-title text-right m-0 font-weight-bold">
				FlashCard
			</h2>
		</div>
	);
};

export default Header;
