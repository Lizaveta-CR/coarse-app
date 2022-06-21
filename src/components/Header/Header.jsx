import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './header.css';

const Header = () => {
	return (
		<div className='div-header'>
			<div>
				<Logo />
			</div>
			<div class='header-right'>
				<b>Liza</b>
				<Button buttonText='Logout' />
			</div>
		</div>
	);
};

export default Header;
