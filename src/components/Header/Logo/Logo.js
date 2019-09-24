import React from 'react';
import triangleLogo from '../../../assets/images/TriangleLogo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={triangleLogo} alt="Triangle Logo"/>
        <p>{props.children}</p>
    </div>
);

export default Logo;