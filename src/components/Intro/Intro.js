import React from 'react';
import mountains from '../../assets/images/Mountains.png';
import classes from './Intro.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubSquare,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'

const Intro = (props) => (
    <div className={classes.Intro}>
        <div className={classes.InfoContainer}>
            <h1>Welcome,</h1>
            <p>I'm Santiago Sossa, a Systems
            Engineer and Frontend developer.
            </p>
            <button>contact me</button>
            <div className={classes.SkillIcons}>
                <FontAwesomeIcon title="Github" className={classes.Icon} icon={faGithubSquare} size="3x" />
                <FontAwesomeIcon title="LinkedIn" className={classes.Icon} icon={faLinkedin} size="3x" />
                <FontAwesomeIcon title="My Resume" className={classes.Icon} icon={faStickyNote} size="3x" />
            </div>
        </div>
        <div className={classes.ImageContainer}>
            <img className={classes.Image} src={mountains} alt="Mountains Img"/>
        </div>
    </div>
);

export default Intro;