import React, {Component} from 'react';
import mountains from '../../assets/images/Mountains.png';
import classes from './Intro.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faStickyNote, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Resume from '../../assets/santiagosossa_cv.pdf';

import Fade from 'react-reveal/Fade';

class Intro extends Component {
    render() {
        const style = {
            color: this.props.colors.text,
            background: `linear-gradient(90deg, ${this.props.colors.bg1} 50%,  ${this.props.colors.bg2} 50%)`
        }
        return(
        <div className={classes.Intro} style={style}>
            <div className={classes.InfoContainer}>
                <Fade duration={1500} top>
                <h1>Welcome,</h1>
                </Fade>
                <Fade duration={1500} top>
                <p>I'm Santiago, a Systems
                Engineer and Frontend developer.
                </p>
                </Fade>
                <Fade duration={1500} top>
                {/* https://mail.google.com/mail/?view=cm&fs=1&tf=1&to= */}
                <a href='mailto: santiagosossa95@gmail.com' rel="noopener noreferrer" target="_blank">
                <button style={{boxShadow:`3px 6px 6px ${this.props.colors.shadow}`}} aria-label="contact me">contact me</button>
                </a>
                </Fade>
                <div className={classes.SkillIcons} style={{filter:`drop-shadow(3px 6px 6px ${this.props.colors.shadow})`}}>
                    <a href="https://github.com/SantiagoSossa" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon 
                            title="Github" 
                            className={classes.Icon} 
                            icon={faGithubSquare} 
                            size="3x"/>
                    </a>
                    <a href="https://www.linkedin.com/in/santiago-sossa-a72582193/" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon 
                            title="LinkedIn" 
                            className={classes.Icon} 
                            icon={faLinkedin} 
                            size="3x" />
                    </a>
                    <a href={Resume} rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon 
                            title="My Resume" 
                            className={classes.Icon} 
                            icon={faStickyNote} 
                            size="3x" />
                    </a>
                </div>
            </div>
            <div className={classes.ImageContainer}>
                <img className={classes.Image} src={mountains} alt="Mountains Img"/>
            </div>
            <a href="#projects" className={classes.DownArrow} aria-label="Go to my projects">
            <FontAwesomeIcon
                        icon={faChevronDown} 
                        size="3x" 
                        style={{color:`${this.props.colors.text}`}}/>
            </a>
        </div>
        )
    }
};

export default Intro;