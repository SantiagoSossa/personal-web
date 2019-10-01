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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi! Exercitationem dolorem possimus nulla harum numquam. Ipsum exercitationem numquam commodi vitae officiis?</p>
                    <h5>Experience with:</h5>
                    <div className={classes.SkillIcons}>
                        <FontAwesomeIcon title="JavaScript" icon={faJs} size="4x" />
                        <FontAwesomeIcon title="CSS" icon={faCss3Alt} size="4x" />
                        <FontAwesomeIcon title="HTML" icon={faHtml5} size="4x" />
                        <FontAwesomeIcon title="React" icon={faReact} size="4x" />
                        <FontAwesomeIcon title="Java" icon={faJava} size="4x" />
                        <FontAwesomeIcon title="Angular" icon={faAngular} size="4x" />
                        <FontAwesomeIcon title="Bootstrap" icon={faBootstrap} size="4x" />
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