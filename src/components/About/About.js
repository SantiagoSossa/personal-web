import React from 'react';
import classes from './About.module.css';

const About = (props) => (
    <div className={classes.About}>
        <div className={classes.AboutContainer}>
            <h3>About</h3>
            <span className={classes.TitleBorder}></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi! Exercitationem dolorem possimus nulla harum numquam. Ipsum exercitationem numquam commodi vitae officiis?</p>
            <h5>Experience with:</h5>
            <p>0 0 0 0 0 0 0 0</p>
        </div>
        <div className={classes.PictureContainer}>
            <span className={classes.Circle}></span>
        </div>
    </div>
);

export default About;