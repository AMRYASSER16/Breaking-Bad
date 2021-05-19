import classes from './Header.module.css';
import React, { Fragment } from 'react';
import logo from '../../imgs/logo.png'

const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <img src={logo} alt='logo' />
        </header>
    </Fragment>;
}


export default Header;