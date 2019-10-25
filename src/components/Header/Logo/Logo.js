import React from 'react';
import sLogo from '../../../assets/images/SLogo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={sLogo} alt="Triangle Logo"/>
        <h3>{props.children}</h3>
    </div>
);

export default Logo;