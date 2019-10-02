import React, {Component} from 'react';
import classes from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3Alt,
    faHtml5,
    faReact,
    faJs,
    faJava,
    faBootstrap
  } from '@fortawesome/free-brands-svg-icons';

import Zoom from 'react-reveal/Zoom';

class About extends Component {
    render () {
        const style = {
            color: this.props.colors.text,
            background: `linear-gradient(90deg, ${this.props.colors.bg1} 50%,  ${this.props.colors.bg2} 50%)`
        }
        return(
            <div id="about" className={classes.About} style={style}>
                <div className={classes.AboutContainer}>
                    <h3>About</h3>
                    <span className={classes.TitleBorder}></span>
                    <p>I’m a systems engineer from the Autonomous University of Manizales. I’m passionate about building interactive applications with intuitive design for the user. I'm mostly interested in web development, UI/UX design, upcoming technology and travel</p>
                    <h5>Experience with:</h5>
                    <div className={classes.SkillIcons}>
                        <FontAwesomeIcon title="JavaScript" icon={faJs} className={classes.Icon} />
                        <FontAwesomeIcon title="CSS" icon={faCss3Alt} className={classes.Icon} />
                        <FontAwesomeIcon title="HTML" icon={faHtml5} className={classes.Icon} />
                        <FontAwesomeIcon title="React" icon={faReact} className={classes.Icon} />
                        <FontAwesomeIcon title="Java" icon={faJava} className={classes.Icon} />
                        <FontAwesomeIcon title="Angular" icon={faAngular} className={classes.Icon} />
                        <FontAwesomeIcon title="Bootstrap" icon={faBootstrap} className={classes.Icon} />
                    </div>
                </div>
            <Zoom duration={2000}>
                <div className={classes.PictureContainer}>
                    <span className={classes.Circle}></span>
                </div>
            </Zoom>
            </div>
        )
    }
};

export default About;