import React, {Component} from 'react';
import Logo from './Logo/Logo';
import classes from './Header.module.css';

class Header extends Component {
    render() {
        return(
            <div className={classes.Header}>
                <Logo><strong>Santiago</strong> Sossa</Logo>
                <ul>
                    <a href="">about</a>
                    <a href="">proyects</a>
                </ul>
            </div>
        )
    }
}

export default Header;