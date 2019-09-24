import React from 'react';
import mountains from '../../assets/images/Mountains.png';
import classes from './Intro.module.css';

const Intro = (props) => (
    <div className={classes.Intro}>
        <div className={classes.InfoContainer}>
            <h1>Hi,</h1>
            <p>I'm Santiago Sossa, a Systems
            Engineer and Frontend developer,
            welcome to my portfolio.
            </p>
            <button>contact me</button>
        </div>
        <div className={classes.ImageContainer}>
            <img className={classes.Image} src={mountains} alt="Mountains Img"/>
        </div>
    </div>
);

export default Intro;