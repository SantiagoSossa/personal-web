import React, {Component} from 'react';
import Logo from './Logo/Logo';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    
    render() {
        const style = {
            color: this.props.colors.text,
            background: `linear-gradient(90deg, ${this.props.colors.bg1} 50%,  ${this.props.colors.bg2} 50%)`
        }
    

        return(
            <div className={classes.Header} style={style}>
                <Logo><strong>Santiago</strong> Sossa</Logo>
                <ul>
                    <a href="#proyects" style={{color: this.props.colors.text}}>proyects</a>
                    <a href="#about" style={{color: this.props.colors.text}}>about</a>
                    <FontAwesomeIcon 
                        className={classes.Icon} 
                        icon={faSun} />
                    <label className={classes.Switch}>
                        <button className={this.props.darkMode? classes.Checked : ''}></button>
                        <span  
                            className={[classes.Slider,classes.Round].join(" ")} 
                            onClick={this.props.clicked}></span>
                    </label>
                    <FontAwesomeIcon
                        className={classes.Icon}
                        icon={faMoon}/>
                </ul>
            </div>
        )
    }
}

export default Header;