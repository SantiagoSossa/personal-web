import React, {Component} from 'react';
import classes from './NavigationItems.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon} from '@fortawesome/free-solid-svg-icons'

class NavigationItems extends Component {
    render() {
        return(
            <div className={classes.NavigationItems} >
                <a href="#projects" style={{color: this.props.colors.text}}>projects</a>
                <a href="#about" style={{color: this.props.colors.text}}>about</a>
                <FontAwesomeIcon 
                    className={classes.Icon} 
                    icon={faSun} />
                <label className={classes.Switch}>
                    <button className={this.props.darkMode? classes.Checked : ''} aria-label="Switch light/dark mode"></button>
                    <span  
                        className={[classes.Slider,classes.Round].join(" ")} 
                        onClick={this.props.clicked}></span>
                </label>
                <FontAwesomeIcon
                    className={classes.Icon}
                    icon={faMoon}/>
            </div>
        )
    }
}

export default NavigationItems;